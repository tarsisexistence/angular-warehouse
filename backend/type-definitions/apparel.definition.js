export const apparelDefinition = [
  `
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
    type Query {
        allApparel(searchTerm: String): [Apparel]
        apparel(id: String!): Apparel
    }
    type Mutation {
        addApparel(title: String!, attribute: String!, color: String!, description: String, price: Float!, image: String, type: String!): Apparel
    }
`
];