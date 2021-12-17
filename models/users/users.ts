import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document<mongoose.Types.ObjectId> {
  _id: mongoose.Types.ObjectId;
  userName: string;
  avatar?: string;
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDocument> {}

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  avatar: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model<UserDocument, UserModel>('Users', UserSchema);

export default Users;
