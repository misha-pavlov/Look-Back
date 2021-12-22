import { MutationResolvers, QueryResolvers } from '../../generated/graphql';
import Users from '../../models/users/users';

export const UsersQueries: QueryResolvers = {
  async users() {
    return Users.find();
  },
  async getUser(root, args) {
    const { userId } = args;
    const user = await Users.findOne({ _id: userId });
    if (!user) {
      throw new Error('User not found!');
    }
    return user;
  },
};

export const UsersMutations: MutationResolvers = {
  async addUser(root, args) {
    const { userName, email, password } = args;
    const existsUser = await Users.findOne({ userName, email });
    if (existsUser) {
      throw new Error('User is exists!');
    }
    return Users.create({
      userName,
      email,
      password,
      img: '',
      firstName: '',
      lastName: '',
      description: '',
    });
  },

  async setDesc(root, args) {
    const { userId, newDesc } = args;
    const updatedUser = await Users.findOneAndUpdate({ _id: userId }, { description: newDesc });
    if (!updatedUser) {
      throw new Error('User not found!');
    }
    return updatedUser;
  },
};
