import { makeExecutableSchema } from 'apollo-server';
import { HasRole } from './directives/hasRole';
import { IsAdmin } from './directives/isAdmin';
import { IsAuthenticated } from './directives/isAuthenticated';
import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    isAdmin: IsAdmin,
    isAuthorized: IsAuthenticated,
    hasRole: HasRole
  }
});
