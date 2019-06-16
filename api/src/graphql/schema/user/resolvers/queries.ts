import { getCustomRepository } from 'typeorm';
import UserRepository from '../../../../repositories/User';

const userQueries = {
  Query: {
    user: async () => {
      const userRepo = await getCustomRepository(UserRepository);
      return userRepo.findOne({
        where: {
          firstName: 'Matt'
        }
      });
    },
    users: async () => {
      const userRepo = await getCustomRepository(UserRepository);
      return userRepo.find();
    }
  }
};

export default userQueries;
