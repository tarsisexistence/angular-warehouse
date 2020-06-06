import mongoose from 'mongoose';
import { v1 } from 'uuid';

const Schema = mongoose.Schema;
export const userSchema = new Schema({
  id: { type: String, default: v1 },
  email: { type: String, unique: true },
  password: String,
  catchPhrase: String
});

userSchema.index({ '$**': 'text' });
