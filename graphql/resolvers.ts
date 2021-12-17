import { UsersQueries, UsersMutations } from './users/resolvers';
import { PostsMutations, PostsQueries } from './posts/resolvers';

export const resolvers = {
  Query: Object.assign({}, UsersQueries, PostsQueries),
  Mutation: Object.assign({}, UsersMutations, PostsMutations),
  Subscription: Object.assign({}),
};
