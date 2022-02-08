import { v4 } from 'uuid';
import { MutationResolvers, QueryResolvers } from '../../generated/graphql';
import Chats from '../../models/chats/chats';
import Users from '../../models/users/users';

export const ChatsQueries: QueryResolvers = {
  async getUserChats(root, args) {
    const { userId } = args;

    const user = await Users.findOne({ _id: userId });
    if (!user) {
      throw new Error('User not found!');
    }

    return Chats.find({ $in: { members: userId } }, {}, { sort: { lastMessageTime: -1 } });
  },

  async searchChat(root, args) {
    const { title } = args;
    const regex = new RegExp(title.trim().split(/\s+/).join('|'));
    return Chats.find({ title: { $regex: regex, $options: 'i' } });
  },
};

export const ChatsMutations: MutationResolvers = {
  async addChat(root, args) {
    const { title, members, groupImage } = args;
    const lastMessageTime = Date.now();

    const chat = await Chats.findOne({ title, members });

    if (chat) {
      throw new Error('Chat is existing!');
    }

    return Chats.create({
      _id: v4(),
      title,
      members,
      lastMessage: '',
      lastMessageTime,
      groupImage,
      readBy: members,
    });
  },

  async deleteChat(root, args) {
    const { chatId } = args;
    await Chats.deleteOne({ _id: chatId });
    return false;
  },
};
