import mongoose from 'mongoose';
import { UserDocument } from '../users/users';

export interface Tags {
  _id: string;
  title: string;
}

export interface Comments {
  _id: string;
  title: string;
  user: UserDocument;
}

export interface PostsDocument {
  _id: string;
  title: string;
  img: string;
  tags: [Tags];
  comments: [Comments];
  createdByUserId: string;
}

interface PostsModel extends mongoose.Model<PostsDocument> {}

const PostsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  tags: { type: Array, required: true },
  comments: { type: Array, required: true },
  createdByUserId: { type: String, required: true },
});

const Posts = mongoose.model<PostsDocument, PostsModel>('Posts', PostsSchema);

export default Posts;
