import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    user: User
    users: [User]
  }

  type Mutation {
    # login: AuthedUser
    signup(input: CreateUserInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    deleteUser(id: ID!): User
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    bio: String
    github: String
    twitter: String
    website: String
    extraLinks: String[]
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
    extraLinks: String[]
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    bio: String
    github: String
    twitter: String
    website: String
    extraLinks: String[]
  }
`;

export default typeDefs;
