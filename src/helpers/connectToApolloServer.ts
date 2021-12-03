import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
// import resolvers
import { resolvers } from '../schema/resolvers';
// import schema
import { schema } from '../schema/schema';

// define the Apollo Server instance
export const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});
