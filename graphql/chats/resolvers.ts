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
    return Chats.create({
      _id: v4(),
      title,
      members,
      lastMessage: 'Mock last message need to get from messages when will be',
      lastMessageTime,
      groupImage,
      readBy: members,
    });
  },
};
