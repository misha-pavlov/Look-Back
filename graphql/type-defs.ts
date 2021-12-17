import { baseSchema } from './base-schema';
import UsersSchema from './users/schema';
import { PostsSchema } from './posts/schema';

export const typeDefs = [baseSchema, UsersSchema, PostsSchema];
