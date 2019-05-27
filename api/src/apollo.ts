import { ApolloServer } from 'apollo-server';
import { Context } from 'apollo-server-core';
import { Request } from 'express';
import { getCustomRepository } from 'typeorm';
import User from './entities/User';
import { schema } from './graphql/schema';
import UserRepository from './repositories/User';

const context = async (ctx: Context<{ req: Request }>): Promise<ApolloContext> => {
  const repo = getCustomRepository(UserRepository);
  const authHeader = ctx.req.get('Authorization');
  let currentUser: User | undefined;

  if (authHeader) {
    currentUser = await repo.getUserFromToken(authHeader);
  }

  /**
   * Ignore the the return value type here so TS doesn't force us to always check for currentUser
   * in our resolvers. That check will be taken care of in the requireAuth directive resolver.
   */
  // @ts-ignore
  return { ...ctx, currentUser };
};

export const server = () =>
  new ApolloServer({
    schema: schema,
    introspection: true,
    playground: true,
    context
  });

export interface ApolloContext extends Context {
  currentUser: User;
}
