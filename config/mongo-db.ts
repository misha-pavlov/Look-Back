import mongoose from 'mongoose';

export async function connectToMongoDb(): Promise<void> {
  const MONGO_URI = process.env.MONGO_URI as string;
  return mongoose.connect(MONGO_URI, {}, function () {
    console.log('👾 Connected to MongoDB 👾');
  });
}
