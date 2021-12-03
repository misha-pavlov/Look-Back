import { User } from '../../models/userModel';

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
  },
  Mutation: {
    addUser: async (root: any, args: { userName: any; email: any; password: any }) => {
      const { userName, email, password } = args;
      const userObj = new User({
        userName,
        email,
        password,
      });
      return userObj
        .save()
        .then((result: { _doc: any }) => {
          return { ...result._doc };
        })
        .catch((err: any) => {
          console.error(err);
        });
    },
  },
};
