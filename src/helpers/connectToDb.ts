import mongoose from 'mongoose';

export const connectToDb = () => {
  mongoose
    .connect(`mongodb+srv://MiLov:ogame000@cluster0.w2uqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => {
      console.log('👾 MongoDB connected successfully 👾');
    });
};
