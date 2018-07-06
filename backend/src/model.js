import mongoose from 'mongoose';
import { apparelSchema } from './schemas/apparel.schema';
import { orderSchema } from './schemas/order.schema';
import { userSchema } from './schemas/user.schema';

export const apparelModel = mongoose.model('apparel', apparelSchema);
export const orderModel = mongoose.model('order', orderSchema);
export const userModel = mongoose.model('user', userSchema);
