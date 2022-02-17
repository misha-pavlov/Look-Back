import { gql } from 'apollo-server';

export const MessagesSchema = gql`
  type Messages {
    _id: String!
    body: String!
    userSentId: String!
    groupId: String!
    readBy: [String!]!
    reply: String
  }

  extend type Query {
    getMessagesByGroupId(groupId: String!): [Messages!]!
  }

  extend type Mutation {
    addMessage(body: String!, userSentId: String!, groupId: String!, reply: String): Messages!
    setReadBy(userId: String!, messageId: String!): Boolean!
    deleteMessage(messageId: String!): Boolean!
  }
`;
