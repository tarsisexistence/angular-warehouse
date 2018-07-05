import { apparelResolver } from './resolvers/apparel.resolver';
import { orderResolver } from './resolvers/order.resolver';

export const resolvers = {
  Query: Object.assign({}, apparelResolver.Query, orderResolver.Query),
  Mutation: Object.assign({}, apparelResolver.Mutation, orderResolver.Mutation)
};
