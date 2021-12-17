import gql from 'graphql-tag';

const UsersSchema = gql`
  type User {
    _id: String!
    userName: String!
    img: String
    email: String!
    password: String!
  }

  extend type Query {
    users: [User!]!
    getUser(userId: String!): User!
  }

  extend type Mutation {
    addUser(userName: String!, email: String!, password: String!): User!
  }
`;

export default UsersSchema;
