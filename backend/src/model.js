import mongoose from 'mongoose';
import { apparelSchema } from './schemas/apparel.schema';
import { orderSchema } from './schemas/order.schema';

export const apparelModel = mongoose.model('apparel', apparelSchema);
export const orderModel = mongoose.model('order', orderSchema);
