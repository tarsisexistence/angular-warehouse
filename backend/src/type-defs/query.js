// const Order = require('../types/order.type');
// const Apparel = require('../types/apparel.type');

import { Order } from '../types/order.type';
import { Apparel } from '../types/apparel.type';
import { User } from '../types/user.type';

const query = `
  type Query {
      allApparel(searchTerm: String): [Apparel]
      apparel(id: String!): Apparel
  
      allOrders(searchTerm: String): [Order]
      order(id: String!): Order
      
      user(id: String!): User
    }
`;

export const Query = () => [
  query,
  Apparel,
  Order,
  User
];