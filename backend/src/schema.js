import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from './type-defs/definition';
import { resolvers } from './resolvers';

export const schema = makeExecutableSchema({ typeDefs, resolvers });
