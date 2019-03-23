// import Repo from '../repo';
import { getManager } from 'typeorm';
import User from '../../entities/User';

const Account = {
  async getUsers() {
    const Repo = await getManager();
    console.log(Repo);
    const users = await Repo.find(User);
    return users;
  }
};

export default Account;
