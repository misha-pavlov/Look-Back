import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model('User', UserSchema);
