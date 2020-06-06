import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    user(id: String): User
    signIn(email: String!, password: String!): User
  }

  extend type Mutation {
    signUp(email: String!, password: String!): User
    setCatchPhrase(id: String!, catchPhrase: String!): User
  }

  type User {
    id: String
    email: String
    password: String
    catchPhrase: String
  }
`;
