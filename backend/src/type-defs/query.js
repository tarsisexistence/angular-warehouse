// const Order = require('../types/order.type');
// const Apparel = require('../types/apparel.type');

import { Order } from '../types/order.type';
import { Apparel } from '../types/apparel.type';

const query = `
  type Query {
      allOrders(searchTerm: String): [Order]
      order(id: String!): Order
      allApparel(searchTerm: String): [Apparel]
      apparel(id: String!): Apparel
    }
`;

export const Query = () => [
  query,
  Order,
  Apparel
];