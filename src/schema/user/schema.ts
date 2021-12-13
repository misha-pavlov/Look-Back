import { gql } from 'apollo-server';

export const schema = gql`
  type User {
    _id: String
    userName: String
    img: String
    email: String
    password: String
  }

  type Query {
    users: [User]
    getUser(userId: String): User
  }

  type Mutation {
    addUser(userName: String, email: String, password: String): User
  }
`;
