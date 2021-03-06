import { v4 } from 'uuid';
import { MutationResolvers, QueryResolvers, User } from '../../generated/graphql';
import Users, { UserDocument } from '../../models/users/users';

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

  async getFollowers(root, args) {
    const { userId } = args;
    const user = await Users.findOne({ _id: userId });

    if (!user) {
      throw new Error('User not found!');
    }

    return user.followers.map(u => {
      return Users.findOne({ _id: u });
    }) as unknown as [User];
  },

  async getFollowing(root, args) {
    const { userId } = args;
    const user = await Users.findOne({ _id: userId });

    if (!user) {
      throw new Error('User not found!');
    }

    return user.following.map(u => {
      return Users.findOne({ _id: u });
    }) as unknown as [User];
  },

  async getBlocked(root, args) {
    const { userId } = args;
    const user = await Users.findOne({ _id: userId });

    if (!user) {
      throw new Error('User not found!');
    }

    return user.blocked.map(u => {
      return Users.findOne({ _id: u });
    }) as unknown as [User];
  },

  async searchUser(root, args) {
    const { userName } = args;
    const regex = new RegExp(userName.trim().split(/\s+/).join('|'));
    return Users.find({ userName: { $regex: regex, $options: 'i' } });
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
      _id: v4(),
      userName,
      email,
      password,
      img: '',
      firstName: '',
      lastName: '',
      description: '',
      followers: [],
      following: [],
      blocked: [],
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

  async doFollow(root, args) {
    const { isFollow, userId, followUserId } = args;

    const user = await Users.findOne({ _id: userId });
    const followUser = await Users.findOne({ _id: followUserId });

    if (!user) {
      throw new Error('User not found!');
    }

    if (!followUser) {
      throw new Error('Follow User not found!');
    }

    if (isFollow) {
      const modifierUser = { $push: { following: followUser._id } };
      const modifierFollowUser = { $push: { followers: user._id } };

      const updatedFollow = (await Users.findOneAndUpdate({ _id: userId }, modifierUser, {
        returnOriginal: false,
      })) as UserDocument;

      await Users.findOneAndUpdate({ _id: followUserId }, modifierFollowUser, {
        returnOriginal: false,
      });

      return updatedFollow;
    }

    const modifierUser = { following: user.following.filter(f => f !== followUserId) };
    const modifierFollowUser = { followers: followUser.followers.filter(f => f !== userId) };

    const updatedFollow = (await Users.findOneAndUpdate({ _id: userId }, modifierUser, {
      returnOriginal: false,
    })) as UserDocument;

    await Users.findOneAndUpdate({ _id: followUserId }, modifierFollowUser, {
      returnOriginal: false,
    });

    return updatedFollow;
  },

  async changeUserMainFields(root, args) {
    const { userId, userName, email, firstName, lastName, img } = args;

    const user = await Users.findOne({ _id: userId });

    if (!user) {
      throw new Error('User not found!');
    }

    return (await Users.findOneAndUpdate(
      { _id: userId },
      {
        userName,
        email,
        firstName: firstName ? firstName : '',
        lastName: lastName ? lastName : '',
        img: img ? img : '',
      },
      {
        returnOriginal: false,
      },
    )) as UserDocument;
  },

  async changePassword(root, args) {
    const { userId, newPassword } = args;

    const user = await Users.findOne({ _id: userId });

    if (!user) {
      throw new Error('User not found!');
    }

    return (await Users.findOneAndUpdate(
      { _id: userId },
      {
        password: newPassword,
      },
      {
        returnOriginal: false,
      },
    )) as UserDocument;
  },

  async doUnblocked(root, args) {
    const { userId, targetUserId } = args;

    const user = await Users.findOne({ _id: userId });
    const targetUser = await Users.findOne({ _id: targetUserId });

    if (!user) {
      throw new Error('User not found!');
    }

    if (!targetUser) {
      throw new Error('Target User not found!');
    }

    const modifierUser = { blocked: user.blocked.filter(f => f !== targetUserId) };

    return (await Users.findOneAndUpdate({ _id: userId }, modifierUser, {
      returnOriginal: false,
    })) as UserDocument;
  },

  async block(root, args) {
    const { userId, targetUserId } = args;

    const user = await Users.findOne({ _id: userId });
    const targetUser = await Users.findOne({ _id: targetUserId });

    if (!user) {
      throw new Error('User not found!');
    }

    if (!targetUser) {
      throw new Error('Target User not found!');
    }

    const modifierBlockUser = { $push: { blocked: targetUserId } };

    const updatedUser = (await Users.findOneAndUpdate({ _id: userId }, modifierBlockUser, {
      returnOriginal: false,
    })) as UserDocument;

    const modifierUser = {
      following: user.following.filter(f => f !== targetUserId),
      followers: user.followers.filter(f => f !== targetUserId),
    };
    const modifierFollowUser = {
      followers: targetUser.followers.filter(f => f !== userId),
      following: targetUser.following.filter(f => f !== userId),
    };

    await Users.findOneAndUpdate({ _id: userId }, modifierUser, {
      returnOriginal: false,
    });

    await Users.findOneAndUpdate({ _id: targetUserId }, modifierFollowUser, {
      returnOriginal: false,
    });

    return updatedUser;
  },
};
