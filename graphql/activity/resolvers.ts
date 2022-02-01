import { v4 } from 'uuid';
import { MutationResolvers, QueryResolvers } from '../../generated/graphql';
import Activities from '../../models/activity/activity';

export const ActivityQueries: QueryResolvers = {
  async getUserActivities(root, args) {
    const { userId } = args;
    return Activities.find({ targetUserId: userId }, {}, { sort: { date: -1 } });
  },

  async hasUnreadActivities(root, args) {
    const { userId } = args;
    const activities = await Activities.countDocuments({ targetUserId: userId, isRead: false });
    return activities > 0;
  },
};

export const ActivityMutations: MutationResolvers = {
  async addUserActivity(root, args) {
    const { actionUserId, targetUserId, commentText, postId } = args;
    const date = Date.now();
    return Activities.create({
      _id: v4(),
      actionUserId,
      targetUserId,
      commentText,
      postId,
      date,
      isRead: false,
    });
  },

  async setUnreadActivity(root, args) {
    const { activityId } = args;
    const updatedActivity = await Activities.findOneAndUpdate({ _id: activityId }, { isRead: true });
    if (!updatedActivity) {
      throw new Error('Activity is not exist');
    }
    return updatedActivity;
  },
};
