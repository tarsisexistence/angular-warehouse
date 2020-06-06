import mongoose from 'mongoose';
import { v1 } from 'uuid';

const Schema = mongoose.Schema;
export const orderSchema = new Schema({
  id: { type: String, default: v1 },
  name: String,
  phone: String,
  address: String
});

orderSchema.index({ '$**': 'text' });
