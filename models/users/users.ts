import mongoose from 'mongoose';

export interface UserDocument {
  _id: string;
  userName: string;
  img?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  description: string;
  followers: Array<string>;
  following: Array<string>;
}

interface UserModel extends mongoose.Model<UserDocument> {}

const UserSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  userName: { type: String, required: true },
  img: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  description: String,
  followers: Array,
  following: Array,
});

const Users = mongoose.model<UserDocument, UserModel>('Users', UserSchema);

export default Users;
