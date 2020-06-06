import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    allOrders: [Order]
    order(id: String!): Order
  }

  extend type Mutation {
    addOrder(name: String!, phone: String!, address: String): Order
  }

  type Order {
    id: String
    name: String
    phone: String
    address: String
  }
`;
