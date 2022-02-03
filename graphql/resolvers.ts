import { UsersQueries, UsersMutations } from './users/resolvers';
import { PostsMutations, PostsQueries } from './posts/resolvers';
import { ActivityMutations, ActivityQueries } from './activity/resolvers';
import { ChatsMutations, ChatsQueries } from './chats/resolvers';

export const resolvers = {
  Query: Object.assign({}, UsersQueries, PostsQueries, ActivityQueries, ChatsQueries),
  Mutation: Object.assign({}, UsersMutations, PostsMutations, ActivityMutations, ChatsMutations),
  Subscription: Object.assign({}),
};
