import { ApolloServer } from 'apollo-server';
import { Context } from 'apollo-server-core';
import { Request } from 'express';
import { createConnection, getCustomRepository } from 'typeorm';
import config from './config';
import User from './database/entities/User';
import UserRepository from './database/repositories/User';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

export interface ApolloContext extends Context {
  currentUser: User | undefined;
  repo: object;
}

const buildRepos = async () => {
  const userRepo = await getCustomRepository(UserRepository);

  return {
    userRepo
  };
};
const createContext = async (ctx: Context<{ req: Request }>): Promise<ApolloContext> => {
  let repo = await buildRepos();
  const token = ctx.req.get('Authorization') || '';
  if (!token) return { currentUser: null, repo };
  const currentUser = await repo.userRepo.getUserFromToken(token);
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

  // Connect to the DB Then start Apollo
  createConnection()
    .then(async _connection => {
      return server
        .listen({ port: config.port })
        .then(({ url }) => console.log(`Server ready at ${url}`))
        .catch(e => console.log('Unable to start server', e));
    })
    .catch(error => console.log('Error Connecting to DB', error));
};
