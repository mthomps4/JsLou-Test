import { makeExecutableSchema } from 'apollo-server';
import { HasRoleDirective } from './directives/hasRole';
import { IsAuthenticatedDirective } from './directives/isAuthenticated';
import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    isAuthenticated: IsAuthenticatedDirective,
    hasRole: HasRoleDirective
  }
});
