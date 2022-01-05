import gql from 'graphql-tag';

const UsersSchema = gql`
  type User {
    _id: String!
    userName: String!
    img: String
    email: String!
    password: String!
    firstName: String
    lastName: String
    description: String
    followers: [String!]
    following: [String!]
  }

  extend type Query {
    users: [User!]!
    getUser(userId: String!): User!
    getFollowers(userId: String!): [User!]!
    getFollowing(userId: String!): [User!]!
  }

  extend type Mutation {
    addUser(userName: String!, email: String!, password: String!): User!
    setDesc(userId: String!, newDesc: String!): User!
    doFollow(isFollow: Boolean!, userId: String!, followUserId: String!): User!
  }
`;

export default UsersSchema;
