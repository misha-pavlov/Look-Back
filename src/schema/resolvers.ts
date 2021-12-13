import { resolvers as userResolvers } from './user/resolvers';
import { resolvers as postsResolvers } from './posts/resolvers';

export const resolvers = [userResolvers, postsResolvers];
