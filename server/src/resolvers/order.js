import { orderModel } from '../models';

export const orderResolver = {
  Query: {
    allOrders: async () => await orderModel.find(),
    order: async (root, { id }) => await orderModel.findOne({ id })
  },
  Mutation: {
    addOrder: async (root, { name, phone, address }) => {
      const order = new orderModel({
        name,
        phone,
        address
      });

      return await order.save();
    }
  }
};
