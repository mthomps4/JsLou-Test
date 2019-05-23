import { AuthenticationError, SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver, GraphQLField } from 'graphql';

export class IsAdmin extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField): void {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args) {
      const [_parent, _info, ctx] = args;
      if (ctx && ctx.currentUser && ctx.currentUser.role && ctx.currentUser.role == 'ADMIN') {
        const result = await resolve.apply(this, args);
        return result;
      } else {
        throw new AuthenticationError('Unauthorized');
      }
    };
  }
}
