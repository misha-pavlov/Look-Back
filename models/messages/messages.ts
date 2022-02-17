import mongoose from 'mongoose';

export interface MessagesDocument {
  _id: string;
  body: string;
  userSentId: string;
  groupId: string;
  readBy: string[];
  reply?: string;
}

interface MessagesModel extends mongoose.Model<MessagesDocument> {}

const MessagesSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  body: { type: String, required: true },
  userSentId: { type: String, required: true },
  groupId: { type: String, required: true },
  readBy: { type: Array, required: true },
  reply: String,
});

const Messages = mongoose.model<MessagesDocument, MessagesModel>('Messages', MessagesSchema);

export default Messages;
