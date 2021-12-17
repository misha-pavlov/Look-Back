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
        img: '',
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
  } as MutationResolvers,
};
