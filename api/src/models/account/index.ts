import { getRepository } from 'typeorm';
import User from '../../entities/User';

// TOOD: Needs Auth and Can Edit Directives

const Account = {
  async getUsers() {
    const userRepo = getRepository(User);
    const users = await userRepo.find();
    return users;
  },
  async signup(args) {
    const userRepo = getRepository(User);

    const existingUser = await userRepo.find({ email: args.email });
    if (existingUser.length > 0) {
      throw new Error('Email already exists');
    }
    try {
      const user = await userRepo.create(args);
      // Potential to check the Model before insert
      const inserted = await userRepo.insert(user);
      console.info('Inserted User', inserted.identifiers);
      return user;
    } catch (e) {
      console.error('Error on user signup', e);
      return e;
    }
  },
  async updateUser(id, input) {
    const userRepo = getRepository(User);
    const updatedUser = userRepo.update(id, input);
    return updatedUser;
  },
  async deleteUser(id) {
    const userRepo = getRepository(User);
    const updatedUser = userRepo.delete(id);
    return updatedUser;
  }
};

export default Account;
