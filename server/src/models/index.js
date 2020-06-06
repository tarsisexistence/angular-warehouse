import mongoose from 'mongoose';
import { apparelSchema } from './apparel.schema';
import { orderSchema } from './order.schema';
import { userSchema } from './user.schema';

export const apparelModel = mongoose.model('products', apparelSchema);
export const orderModel = mongoose.model('order', orderSchema);
export const userModel = mongoose.model('user', userSchema);
