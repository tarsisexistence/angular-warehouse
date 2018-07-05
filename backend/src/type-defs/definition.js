import { Query } from './query';
import { Mutation } from './mutation';

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

export const typeDefs = [
  SchemaDefinition,
  Query,
  Mutation
];