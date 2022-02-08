import { gql } from 'apollo-server';

export const ChatsSchema = gql`
  type Chats {
    _id: String!
    title: String!
    members: [String!]!
    lastMessage: String
    lastMessageTime: String
    groupImage: String!
    readBy: [String!]!
  }

  extend type Query {
    getUserChats(userId: String!): [Chats!]!
    searchChat(title: String!): [Chats!]!
    hasUnreadChats(userId: String!): Boolean!
  }

  extend type Mutation {
    addChat(title: String!, members: [String!]!, groupImage: String!): Chats!
    deleteChat(chatId: String!): Boolean!
  }
`;
