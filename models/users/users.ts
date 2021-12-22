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
}

interface UserModel extends mongoose.Model<UserDocument> {}

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  img: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  description: String,
});

const Users = mongoose.model<UserDocument, UserModel>('Users', UserSchema);

export default Users;
