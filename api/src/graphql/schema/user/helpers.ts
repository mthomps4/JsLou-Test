import { getCustomRepository } from 'typeorm';
import UserRepository from '../../../repositories/User';

export const getUserFromToken = async (token: string) => {
  const userRepo = await getCustomRepository(UserRepository);
  return userRepo.findOne({
    where: {
      token
    }
  });
};
