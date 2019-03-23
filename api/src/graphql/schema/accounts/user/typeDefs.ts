import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    user: User
    users: [User]
  }

  type User {
    id: ID
    name: String
    email: String
  }
`;

export default typeDefs;
