import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    user: User @isAuthenticated
    users: [User] @isAuthenticated
  }

  type Mutation {
    # login: AuthedUser
    signup(input: CreateUserInput!): User @hasRole @isAuthenticated
    updateUser(id: ID!, input: UpdateUserInput!): User @hasRole @isAuthenticated
    deleteUser(id: ID!): User @hasRole @isAuthenticated
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    role: String
    bio: String
    github: String
    twitter: String
    website: String
    extraLinks: [String]
    # events: Event[]
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    bio: String!
    github: String
    twitter: String
    website: String
    extraLinks: [String]
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    bio: String
    github: String
    twitter: String
    website: String
    extraLinks: [String]
  }
`;

export default typeDefs;
