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
    typingUsers: [String!]!
  }

  extend type Query {
    getUserChats(userId: String!): [Chats!]!
    searchChat(title: String!): [Chats!]!
    hasUnreadChats(userId: String!): Boolean!
    getChat(chatId: String!): Chats
  }

  extend type Mutation {
    addChat(title: String!, members: [String!]!, groupImage: String!): Chats!
    deleteChat(chatId: String!): Boolean!
    updateTypingUsers(chatId: String!, newArray: [String!]!): Boolean!
  }
`;
