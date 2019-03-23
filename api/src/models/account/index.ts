// import Repo from '../repo';
import { getManager } from 'typeorm';
import User from '../../entities/User';

const Account = {
  async getUsers() {
    await getManager().find(User);
  }
};

export default Account;
