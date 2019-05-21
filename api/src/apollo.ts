import { ApolloServer } from 'apollo-server';
import { schema } from './graphql/schema';
// import { getCustomRepository } from 'typeorm';
// import { UserRepository } from '../repositories/UserRepository';
// import { Context } from 'apollo-server-core';
// import User from '../entities/User';
// import { Request } from 'express';

/** Sets current user on context if a valid header was provided */
// // const context = async (ctx: ContextParameters) => {
// const context = async (ctx: Context<{ req: Request }>): Promise<ApolloContext> => {
//   const repo = getCustomRepository(UserRepository);
//   const authHeader = ctx.req.get('Authorization');
//   let currentUser: User | undefined;

//   if (authHeader) {
//     currentUser = await repo.findFromAuthHeader(authHeader);
//   }

//   return { ...ctx, currentUser };
// };

export const server = () =>
  new ApolloServer({
    schema: schema,
    introspection: true,
    playground: true
    // context
  });

// interface ApolloContext extends Context {
//   currentUser: User | undefined;
// }
