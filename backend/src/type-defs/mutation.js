import { Order } from '../types/order.type';
import { Apparel } from '../types/apparel.type';


const mutation = `
  type Mutation {
    addOrder(name: String!, phone: String!, address: String!): Order
    addApparel(title: String!, attribute: String!, color: String!, description: String, price: Float!, image: String, type: String!): Apparel 
  }
`;

export const Mutation = () => [
  mutation,
  Order,
  Apparel
];