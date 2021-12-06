import { v4 as uuidv4 } from 'uuid';
import { User } from '../../models/userModel';
import { MutationResolvers, QueryResolvers, UserResolvers } from '../../generated/graphql';

export const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .then(user => {
          return user.map(r => ({ ...r._doc }));
        })
        .catch(err => {
          console.error(err);
        });
    },
    getUser: async (root, args) => {
      const { userId } = args;
      const result = await User.findOne({ id: userId });
      return result;
    },
  } as QueryResolvers,
  Mutation: {
    addUser: async (root, args) => {
      const { userName, email, password } = args;
      const userObj = new User({
        userName,
        email,
        password,
      });
      return userObj
        .save()
        .then((result: { _doc: UserResolvers }) => {
          return { ...result._doc };
        })
        .catch((err: string) => {
          console.error(err);
        });
    },
    addPost: async (root, args) => {
      const { userId, img, title, tags } = args;

      const postObj = {
        _id: uuidv4(),
        title,
        img,
        tags,
        comments: [],
      };

      const result = await User.findOneAndUpdate({ id: userId }, { $addToSet: { posts: postObj } });
      return result;
    },
  } as MutationResolvers,
};
