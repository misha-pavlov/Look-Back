import mongoose from 'mongoose';

export interface ChatsDocument {
  _id: string;
  title: string;
  members: string[];
  lastMessage: string;
  lastMessageTime: string;
  groupImage: string;
}

interface ChatsModel extends mongoose.Model<ChatsDocument> {}

const ChatsSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  members: { type: Array, required: true },
  lastMessage: String,
  lastMessageTime: String,
  groupImage: String,
});

const Chats = mongoose.model<ChatsDocument, ChatsModel>('Chats', ChatsSchema);

export default Chats;
