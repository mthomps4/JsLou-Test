import { ApolloServer } from 'apollo-server';
import { Context } from 'apollo-server-core';
import { Request } from 'express';
import { createConnection, getCustomRepository } from 'typeorm';
import config from './config';
import User from './entities/User';
import resolvers from './graphql/schema/resolvers';
import typeDefs from './graphql/schema/typeDefs';
import UserRepository from './repositories/User';

export interface ApolloContext extends Context {
  currentUser: User | undefined;
  repo: Object;
}
const createContext = async (ctx: Context<{ req: Request }>): Promise<ApolloContext> => {
  const repo = {
    UserRepository
  };

  const token = ctx.req.get('Authorization') || '';
  if (!token) return { currentUser: null, repo };

  const userRepo = await getCustomRepository(UserRepository);
  const currentUser = await userRepo.getUserFromToken(token);

  return { currentUser, repo };
};

export const start = async () => {
  const server = new ApolloServer({
    playground: config.isDev,
    introspection: config.isDev,
    typeDefs,
    resolvers,
    context: req => createContext(req)
  });

  // Connect to the DB
  createConnection()
    .then(async _connection => {
      console.log('Connected to DB');
      return server
        .listen({ port: config.port })
        .then(({ url }) => console.log(`Server ready at ${url}`))
        .catch(e => console.log('Unable to start server', e));
    })
    .catch(error => console.log('Error Connecting to DB', error));
};
