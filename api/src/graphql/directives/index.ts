import { gql } from 'apollo-server';

const directives = gql`
  directive @isAuthenticated on FIELD_DEFINITION
  directive @hasRole(requires: Role = ADMIN) on OBJECT | FIELD_DEFINITION

  enum Role {
    ADMIN
    EDITOR
    VIEWER
  }
`;

export default directives;
