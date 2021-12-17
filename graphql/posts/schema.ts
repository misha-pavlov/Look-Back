import { gql } from 'apollo-server';

export const PostsSchema = gql`
  type Posts {
    _id: String!
    title: String!
    img: String!
    tags: [Tag]!
    comments: [Comment]!
    createdByUserId: String!
  }

  type Tag {
    _id: String!
    title: String!
  }

  type Comment {
    _id: String!
    title: String!
    user: User!
  }

  input TagInput {
    _id: String!
    title: String!
  }

  type Query {
    posts: [Posts!]!
    getUserPosts(userId: String!): [Posts!]!
  }

  type Mutation {
    addPost(userId: String!, title: String!, img: String!, tags: [TagInput]!): Posts!
  }
`;
