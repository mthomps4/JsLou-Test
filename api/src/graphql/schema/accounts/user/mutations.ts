import { getConnection } from 'typeorm';
import User from '../../../../entities/User';

const userMutations = {
  Mutation: {
    async signup(_parent, { input: args }, _context) {
      // TOOD IS ADMIN - CAN CREATE DIRECTIVE
      const userRepo = await getConnection().getRepository(User);
      const user = Object.assign(new User(), args);
      return userRepo.save(user);
    },
    async updateUser(_parent, args, context) {},
    async deleteUser(_parent, args, context) {}
  }
};

export default userMutations;
