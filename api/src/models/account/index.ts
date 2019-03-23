// import Repo from '../repo';
import { getRepository } from 'typeorm';
import User from '../../entities/User';

const Account = {
  async getUsers() {
    const userRepo = getRepository(User);
    const users = await userRepo.find();
    return users;
  }
};

export default Account;
