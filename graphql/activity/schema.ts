import { gql } from 'apollo-server';

export const ActivitySchema = gql`
  type Activity {
    _id: String!
    actionUserId: String!
    targetUserId: String!
    commentText: String
    postImage: String
    date: String!
    isRead: Boolean
  }

  extend type Query {
    getUserActivities(userId: String!): [Activity!]!
    hasUnreadActivities(userId: String!): Boolean!
  }

  extend type Mutation {
    addUserActivity(actionUserId: String!, targetUserId: String!, commentText: String, postImage: String): Activity!
    setUnreadActivity(activityId: String!): Activity!
  }
`;
