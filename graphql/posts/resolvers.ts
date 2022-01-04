import { v4 } from 'uuid';
import { MutationResolvers, QueryResolvers } from '../../generated/graphql';
import Posts, { PostsDocument } from '../../models/posts/posts';
import Users from '../../models/users/users';

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

  async addComment(root, args) {
    const { title, userId, postId } = args;
    const user = await Users.findOne({ _id: userId });
    const post = await Posts.findOne({ _id: postId });

    if (!user) {
      throw new Error('User not found!');
    }

    if (!post) {
      throw new Error('Post not found!');
    }

    const modifier = { $push: { comments: { _id: v4(), title, user } } };

    const updatedPosts = (await Posts.findOneAndUpdate({ _id: postId }, modifier, {
      returnOriginal: false,
    })) as PostsDocument;

    return updatedPosts || null;
  },
};
