import { AuthenticationError, SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver, GraphQLField } from 'graphql';

export class IsAuthenticatedDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField): void {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args) {
      const [_parent, _info, ctx] = args;
      if (ctx && ctx.currentUser) {
        const result = await resolve.apply(this, args);
        return result;
      } else {
        throw new AuthenticationError('You must be signed in to view this resource.');
      }
    };
  }
}
