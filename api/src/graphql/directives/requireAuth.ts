import { AuthenticationError, SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver, GraphQLField } from 'graphql';

export class RequireAuthDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField): void {
    const { resolve = defaultFieldResolver } = field;
    const { role } = this.args;

    field.resolve = async function(...args) {
      const [, , ctx] = args;
      if (ctx && ctx.currentUser) {
        if (role && (!ctx.currentUser.role || !ctx.currentUser.role.includes(role))) {
          throw new AuthenticationError('You are not authorized to view this resource.');
        } else {
          const result = await resolve.apply(this, args);
          return result;
        }
      } else {
        throw new AuthenticationError('You must be signed in to view this resource.');
      }
    };
  }
}
