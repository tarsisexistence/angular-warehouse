import { gql } from 'apollo-server-express';

import apparelSchema from './apparel';
import orderSchema from './order';
import userSchema from './user';

const schema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export const typeDefs = [schema, apparelSchema, orderSchema, userSchema];
