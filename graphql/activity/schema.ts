import { gql } from 'apollo-server';

export const ActivitySchema = gql`
  type Activity {
    _id: String!
    actionUserId: String!
    targetUserId: String!
    commentText: String
    postImage: String
    date: String!
  }

  extend type Query {
    getUserActivities(userId: String!): [Activity!]!
  }

  extend type Mutation {
    addUserActivity(actionUserId: String!, targetUserId: String!, commentText: String, postImage: String): Activity!
  }
`;
