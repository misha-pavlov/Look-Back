import dotenv from 'dotenv';
import express from 'express';
import http from 'http';

import { connectToMongoDb } from './config/mongo-db';
import { startApolloServer } from './config/apollo-server';

async function startServer() {
  // init .env file
  dotenv.config();

  const PORT = process.env.PORT || 4000;

  await connectToMongoDb();

  const app = express();
  await startApolloServer(app);
  const server = http.createServer(app);
  server.listen(PORT, function () {
    console.log(`🥶 Server started at port ${PORT} 🥶`);
  });
}

startServer().catch(err => {
  console.error(err);
  process.exit(1);
});
