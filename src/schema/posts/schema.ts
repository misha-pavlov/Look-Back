import { gql } from 'apollo-server';

export const schema = gql`
  type Posts {
    _id: String
    title: String
    img: String
    tags: [Tag]
    comments: [Comment]
    createdByUserId: String
  }

  type Tag {
    _id: String
    title: String
  }

  type Comment {
    _id: String
    title: String
    user: User
  }

  input TagInput {
    title: String
  }

  type Query {
    posts: [Posts]
    getPostsForUser(userId: String): [Posts]
  }

  type Mutation {
    addPost(userId: String, title: String, img: String, tags: [TagInput]): Posts
  }
`;
