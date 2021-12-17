import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import core from 'express-serve-static-core';

import { schema } from '../graphql';

export async function startApolloServer(app: core.Express): Promise<void> {
  const apolloServer = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    // context,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: '/graphql',
    cors: false,
  });
}
