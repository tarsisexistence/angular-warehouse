import { apparelResolver } from './apparel';
import { orderResolver } from './order';
import { userResolver } from './user';

export const resolvers = {
  Query: Object.assign({}, apparelResolver.Query, orderResolver.Query, userResolver.Query),
  Mutation: Object.assign({}, apparelResolver.Mutation, orderResolver.Mutation, userResolver.Mutation)
};
