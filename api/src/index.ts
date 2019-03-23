import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { server } from './apollo';

createConnection()
  .then(async connection => {
    console.log('Starting Server...');

    server.listen().then(({ url }: any) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(error => console.log(error));
