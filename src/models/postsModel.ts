import mongoose from 'mongoose';
const { Schema } = mongoose;

const PostsSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  comments: {
    type: Array,
    required: true,
  },
  createdByUserId: {
    type: String,
    required: true,
  },
});

export const Posts = mongoose.model('Posts', PostsSchema);
