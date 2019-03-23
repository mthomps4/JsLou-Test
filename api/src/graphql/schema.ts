import { makeExecutableSchema } from 'apollo-server';
import { RequireAuthDirective } from './directives/requireAuth';
import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    requireAuth: RequireAuthDirective
  }
});
