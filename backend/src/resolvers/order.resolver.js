import { orderModel } from '../model';

export const orderResolver = {
  Query: {
    allOrders: (root, { searchTerm }) => orderModel.find(),
    order: (root, { id }) => orderModel.findOne({ id })
  },
  Mutation: {
    addOrder: (root, { name, phone, address }) => {
      const order = new orderModel({
        name,
        phone,
        address
      });

      return order.save();
    }
  }
};