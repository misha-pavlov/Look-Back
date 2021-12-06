import { gql } from 'apollo-server';

export const schema = gql`
  type User {
    _id: String
    userName: String
    img: String
    email: String
    password: String
    posts: [Post]
  }

  type Comment {
    _id: String
    title: String
    user: User
  }

  type Tag {
    _id: String
    title: String
  }

  input TagInput {
    title: String
  }

  type Post {
    _id: String
    title: String
    img: String
    tags: [Tag]
    comments: [Comment]
  }

  type Query {
    users: [User]
    getUser(userId: String): User
  }

  type Mutation {
    addUser(userName: String, email: String, password: String): User
    addPost(userId: String, title: String, img: String, tags: [TagInput]): Post
  }
`;
