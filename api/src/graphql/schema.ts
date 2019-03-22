import { gql, makeExecutableSchema } from 'apollo-server';
import { RequireAuthDirective } from './directives/requireAuth';

const Query = gql`
  type Query {
    # This is just to make extending possible so we can co-locate queries.
    # If we have global queries they can go here.
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    # This is just to make extending possible so we can co-locate queries.
    # If we have global mutations they can go here.
    _empty: String
  }
`;

const Subscription = gql`
  type Subscription {
    _empty: String
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, Subscription],
  // resolvers: merge(userResolvers, addressResolvers, billingResolvers),
  schemaDirectives: {
    requireAuth: RequireAuthDirective
  }
});
