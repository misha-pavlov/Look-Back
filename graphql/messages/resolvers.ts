import { v4 } from 'uuid';
import { MutationResolvers, QueryResolvers } from '../../generated/graphql';
import Messages from '../../models/messages/messages';

export const MessagesQueries: QueryResolvers = {
  async getMessagesByGroupId(root, args) {
    const { groupId } = args;
    return Messages.find({ groupId });
  },
};

export const MessagesMutations: MutationResolvers = {
  async addMessage(root, args) {
    const { body, groupId, userSentId } = args;
    const readBy = [userSentId];
    return Messages.create({
      _id: v4(),
      body,
      userSentId,
      groupId,
      readBy,
    });
  },
};
