import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './type-defs';
import { resolvers } from './resolvers';

export default new ApolloServer({ typeDefs, resolvers });
