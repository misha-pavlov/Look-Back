import { v4 } from 'uuid';
import { MutationResolvers, QueryResolvers } from '../../generated/graphql';
import Messages from '../../models/messages/messages';
import Chats from '../../models/chats/chats';

export const MessagesQueries: QueryResolvers = {
  async getMessagesByGroupId(root, args) {
    const { groupId } = args;
    return Messages.find({ groupId });
  },
};

export const MessagesMutations: MutationResolvers = {
  async addMessage(root, args) {
    const { body, groupId, userSentId, reply } = args;
    const readBy = [userSentId];
    await Chats.findOneAndUpdate({ _id: groupId }, { lastMessage: body, readBy });
    return Messages.create({
      _id: v4(),
      body,
      userSentId,
      groupId,
      readBy,
      reply,
    });
  },

  async setReadBy(root, args) {
    const { userId, messageId } = args;
    const message = await Messages.findOne({ _id: messageId });

    if (message) {
      if (message.readBy.includes(userId)) {
        await Chats.findOneAndUpdate({ _id: message.groupId }, { lastMessage: message.body });
        return false;
      }

      await Messages.findOneAndUpdate({ _id: messageId }, { readBy: [...message.readBy, userId] });
      await Chats.findOneAndUpdate(
        { _id: message.groupId },
        { readBy: [...message.readBy, userId], lastMessage: message.body },
      );
      return false;
    }

    return false;
  },

  async deleteMessage(root, args) {
    const { messageId } = args;
    await Messages.deleteOne({ _id: messageId });
    return false;
  },
};
