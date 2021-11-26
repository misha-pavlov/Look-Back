const { ApolloServer } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

// import resolvers
const resolvers = require('./schemas/schema/resolvers.ts');

// import schema
const typeDefs = require('./schemas/schema/schema.graphql.ts');

// define the Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

// start the graphql server
server.listen().then(({ url }: { url: string }) => {
  console.log(`Server ready at ${url}`);
});
