import { v4 } from 'uuid';
import { MutationResolvers, QueryResolvers } from '../../generated/graphql';
import Posts from '../../models/posts/posts';

export const PostsQueries: QueryResolvers = {
  async posts() {
    return Posts.find();
  },
  async getUserPosts(root, args) {
    const { userId } = args;
    return Posts.find({ createdByUserId: userId });
  },
};

export const PostsMutations: MutationResolvers = {
  async addPost(root, args) {
    const { userId, img, title, tags } = args;
    const time = Date.now();
    return Posts.create({
      _id: v4(),
      title,
      img,
      tags,
      comments: [],
      time,
      createdByUserId: userId,
    });
  },
};
