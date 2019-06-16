import { getCustomRepository } from 'typeorm';
import User from '../../../../database/entities/User';
import UserRepository from '../../../../database/repositories/User';

const signup = (args, { repo, currentUser }) => {
  const x = User;
  const y = getCustomRepository(UserRepository);
};

module.exports = {
  signup
};
