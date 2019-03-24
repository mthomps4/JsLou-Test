import Account from '../../../../models/account';

const userMutations = {
  async createUser(_parent, args, _context) {
    // TOOD IS ADMIN - CAN CREATE DIRECTIVE
    Account.signup(args);
  },
  async updateUser(_parent, args, context) {},
  async deleteUser(_parent, args, context) {}
};

export default userMutations;
