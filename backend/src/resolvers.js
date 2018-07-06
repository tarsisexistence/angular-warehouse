import { apparelResolver } from './resolvers/apparel.resolver';
import { orderResolver } from './resolvers/order.resolver';
import { userResolver } from './resolvers/user.resolver';

export const resolvers = {
  Query: Object.assign(
      {},
      apparelResolver.Query,
      orderResolver.Query,
      userResolver.Query
  ),
  Mutation: Object.assign(
      {},
      apparelResolver.Mutation,
      orderResolver.Mutation,
      userResolver.Mutation
  )
};
