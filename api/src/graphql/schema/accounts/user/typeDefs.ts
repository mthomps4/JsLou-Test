import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    user: User
    users: [User]
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
  }
`;

export default typeDefs;
