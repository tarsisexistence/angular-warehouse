import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;
export const userSchema = new Schema({
  id: { type: String, default: uuid.v1 },
  email: { type: String, unique: true },
  password: String,
  catchPhrase: String
});

userSchema.index({ '$**': 'text' });
