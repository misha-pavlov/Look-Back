import { UsersQueries, UsersMutations } from './users/resolvers';

export const resolvers = {
  Query: Object.assign({}, UsersQueries),
  Mutation: Object.assign({}, UsersMutations),
  Subscription: Object.assign({}),
};
