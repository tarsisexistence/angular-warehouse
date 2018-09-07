import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './type-defs/definition';
import { resolvers } from './resolvers';

export const server = new ApolloServer({ typeDefs, resolvers });
