// import { gql } from 'apollo-server';
import directives from '../directives';
import user from './user';

const typeDefs = [directives, user.typeDefs];

export default typeDefs;
