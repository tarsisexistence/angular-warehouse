import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;
export const orderSchema = new Schema({
  id: { type: String, default: uuid.v1 },
  name: String,
  phone: String,
  address: String
});

orderSchema.index({ '$**': 'text' });

// export const orderModel = mongoose.model('apparel', orderSchema);