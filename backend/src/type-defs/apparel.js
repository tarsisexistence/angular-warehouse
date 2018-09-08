import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    allApparel: [Apparel]
    apparel(id: String!): Apparel
  }

  extend type Mutation {
    addApparel(
      title: String!,
      attribute: String!,
      color: String!,
      description: String,
      price: Float!,
      image: String,
      type: String!
    ): Apparel
  }

  type Apparel {
    id: String
    title: String
    attribute: String
    color: String
    description: String
    price: Float
    image: String
    type: String
  }
`;