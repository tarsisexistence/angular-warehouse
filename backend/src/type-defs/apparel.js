import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    allApparel: [Apparel]
    apparel(id: String!): Apparel
  }

  extend type Mutation {
    addApparel(
      type: String!
      title: String!
      collection: String!
      colors: [String]
      price: Float!
      image: String
    ): Apparel
  }

  type Apparel {
    id: String
    type: String
    collection: String
    colors: [String]
    title: String
    price: Float
    image: String
  }
`;
