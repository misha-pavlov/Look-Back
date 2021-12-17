import { v4 as uuidv4 } from 'uuid';
import { MutationResolvers, PostsResolvers, QueryResolvers } from '../../generated/graphql';
import { Posts } from '../../models/postsModel';

export const resolvers = {
  Query: {
    posts: async () => {
      return Posts.find()
        .then(post => {
          return post.map(r => ({ ...r._doc }));
        })
        .catch(err => {
          console.error(err);
        });
    },
    getUserPosts: async (root, args) => {
      const { userId } = args;
      const result = await Posts.find({ createdByUserId: userId });
      return result;
    },
  } as QueryResolvers,
  Mutation: {
    addPost: async (root, args) => {
      const { userId, img, title, tags } = args;
      console.log('userId = ', userId);
      console.log('img = ', img);
      console.log('title = ', title);
      console.log('tags = ', tags);
      const postsObj = new Posts({
        _id: uuidv4(),
        title,
        img,
        tags,
        comments: [],
        createdByUserId: userId,
      });
      return postsObj
        .save()
        .then((result: { _doc: PostsResolvers }) => {
          return { ...result._doc };
        })
        .catch((err: string) => {
          console.error(err);
        });
    },
  } as MutationResolvers,
};
