import { baseSchema } from './base-schema';
import UsersSchema from './users/schema';
import { PostsSchema } from './posts/schema';
import { ActivitySchema } from './activity/schema';
import { ChatsSchema } from './chats/schema';

export const typeDefs = [baseSchema, UsersSchema, PostsSchema, ActivitySchema, ChatsSchema];
