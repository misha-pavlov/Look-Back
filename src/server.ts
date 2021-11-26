import { server } from './helpers/connectToApolloServer';
import { connectToDb } from './helpers/connectToDb';

// start the graphql server
server.listen().then(({ url }: { url: string }) => {
  connectToDb();
  console.log(`🥶 Server ready at ${url} 🥶`);
});
