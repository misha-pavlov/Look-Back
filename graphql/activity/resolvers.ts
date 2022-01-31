import { v4 } from 'uuid';
import { MutationResolvers, QueryResolvers } from '../../generated/graphql';
import Activities from '../../models/activity/activity';

export const ActivityQueries: QueryResolvers = {
  async getUserActivities(root, args) {
    const { userId } = args;
    return Activities.find({ targetUserId: userId }, {}, { sort: { date: -1 } });
  },
};

export const ActivityMutations: MutationResolvers = {
  async addUserActivity(root, args) {
    const { actionUserId, targetUserId, commentText, postImage } = args;
    const date = Date.now();
    return Activities.create({
      _id: v4(),
      actionUserId,
      targetUserId,
      commentText,
      postImage,
      date,
    });
  },
};
