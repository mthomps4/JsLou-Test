// import { gql } from 'apollo-server';
import { gql } from 'apollo-server';
import directives from '../directives';
import user from './user';

// This is just to make extending possible so we can co-locate queries.
// If we have global queries/mutations they can go here.
const RootSchema = gql`
  type Mutation {
    _empty: String
  }
  type Query {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
`;

const typeDefs = [directives, RootSchema, user.typeDefs];

export default typeDefs;
