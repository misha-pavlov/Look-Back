import { gql } from 'apollo-server';

export const schema = gql`
  type User {
    _id: String
    userName: String
    email: String
    password: String
  }
  type Query {
    users: [User]
  }
  type Mutation {
    addUser(userName: String, email: String, password: String): User
  }
`;
