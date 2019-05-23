import { gql } from 'apollo-server';

const directives = gql`
  directive @isAuthenticated on FIELD
  directive @isAdmin(role: String) on FIELD

  directive @auth(requires: Role = ADMIN) on OBJECT | FIELD_DEFINITION

  enum Role {
    ADMIN
    EDITOR
    VIEWER
  }
`;

export default directives;
