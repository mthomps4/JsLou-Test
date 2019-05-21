import { getConnection } from 'typeorm';
import User from '../../../../entities/User';

const userQueries = {
  Query: {
    user: async () => {
      const userRepo = await getConnection().getRepository(User);
      return userRepo.findOne({
        where: {
          firstName: 'Matt'
        }
      });
    },
    users: async () => {
      const userRepo = await getConnection().getRepository(User);

      return userRepo.find();
    }
  }
};

export default userQueries;
