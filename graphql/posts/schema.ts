import { gql } from 'apollo-server';

export const PostsSchema = gql`
  type Posts {
    _id: String!
    title: String!
    img: String!
    tags: [Tag]!
    comments: [Comment]!
    time: String
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

  extend type Query {
    posts: [Posts!]!
    getUserPosts(userId: String!): [Posts!]!
    getPostsForUser(userId: String!, skip: Int = 5, limit: Int = 5): [Posts!]!
  }

  extend type Mutation {
    addPost(userId: String!, title: String!, img: String!, tags: [TagInput]!): Posts!
    addComment(title: String!, userId: String!, postId: String!): Posts!
  }
`;
