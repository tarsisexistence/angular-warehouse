// const Order = require('../types/order.type');
// const Apparel = require('../types/apparel.type');

import { Order } from '../types/order.type';
import { Apparel } from '../types/apparel.type';
import { User } from '../types/user.type';

const query = `
  type Query {
      allApparel: [Apparel]
      apparel(id: String!): Apparel
  
      allOrders: [Order]
      order(id: String!): Order
      
      user(id: String): User
      signIn(email: String!, password: String!): User
    }
`;

export const Query = () => [
  query,
  Apparel,
  Order,
  User
];