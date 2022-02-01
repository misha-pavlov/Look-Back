import mongoose from 'mongoose';

export interface ActivityDocument {
  _id: string;
  actionUserId: string;
  targetUserId: string;
  commentText?: string;
  postImage?: string;
  date: string;
  isRead?: boolean;
}

interface ActivityModel extends mongoose.Model<ActivityDocument> {}

const ActivitySchema = new mongoose.Schema({
  _id: { type: String, required: true },
  actionUserId: { type: String, required: true },
  targetUserId: { type: String, required: true },
  commentText: String,
  postImage: String,
  date: { type: String, required: true },
  isRead: Boolean,
});

const Activities = mongoose.model<ActivityDocument, ActivityModel>('Activity', ActivitySchema);

export default Activities;
