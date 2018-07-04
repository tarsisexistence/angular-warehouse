import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { apparelDefinition } from './type-definitions/apparel.definition';

const typeDefs = [
  ...apparelDefinition
];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;