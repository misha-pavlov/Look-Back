import { UsersQueries, UsersMutations } from './users/resolvers';
import { PostsMutations, PostsQueries } from './posts/resolvers';
import { ActivityMutations, ActivityQueries } from './activity/resolvers';

export const resolvers = {
  Query: Object.assign({}, UsersQueries, PostsQueries, ActivityQueries),
  Mutation: Object.assign({}, UsersMutations, PostsMutations, ActivityMutations),
  Subscription: Object.assign({}),
};
