import { baseSchema } from './base-schema';
import UsersSchema from './users/schema';

export const typeDefs = [baseSchema, UsersSchema];
