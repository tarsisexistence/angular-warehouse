import mongoose from 'mongoose';
import { v1 } from 'uuid';

const Schema = mongoose.Schema;
export const apparelSchema = new Schema({
  id: { type: String, default: v1 },
  title: String,
  colors: [String],
  price: Number,
  image: String,
  type: String
});

apparelSchema.index({ '$**': 'text' });
