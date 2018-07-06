import { Order } from '../types/order.type';
import { Apparel } from '../types/apparel.type';
import { User } from '../types/user.type';

const mutation = `
  type Mutation {
    addOrder(name: String!, phone: String!, address: String): Order
    
    addApparel(title: String!, attribute: String!, color: String!, description: String, price: Float!, image: String, type: String!): Apparel 
    
    signUp(email: String!, password: String!): User
    setCatchPhrase(id: String!, catchPhrase: String!): User
  }
`;

export const Mutation = () => [
  mutation,
  Apparel,
  Order,
  User
];