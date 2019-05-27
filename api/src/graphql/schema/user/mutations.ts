import { getCustomRepository } from 'typeorm';
import User from '../../../entities/User';
import UserRepository from '../../../repositories/User';

const userMutations = {
  Mutation: {
    async signup(_parent, { input: args }, _context) {
      const userRepository = getCustomRepository(UserRepository);
      const user = Object.assign(new User(), args);
      return userRepository.save(user);
    },
    async updateUser(_parent, args, context) {},
    async deleteUser(_parent, args, context) {}
  }
};

export default userMutations;
