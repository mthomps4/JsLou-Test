import { getCustomRepository } from 'typeorm';
import User from '../database/entities/User';
import UserRepository from '../database/repositories/User';

const signup = (args, _context) => {
  const user = Object.assign(new User(), args);
  const userRepo = getCustomRepository(UserRepository);
  return userRepo.save(user);
};

const updateUser = (args, { currentUser }) => {
  // Get user from Args
  // Can Update check with currentUser?
  // Update or Unauthorized
};

module.exports = {
  signup,
  updateUser
};
