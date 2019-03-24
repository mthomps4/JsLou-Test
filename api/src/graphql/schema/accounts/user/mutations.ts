import Account from '../../../../models/account';

const userMutations = {
  Mutation: {
    async signup(_parent, { input: args }, _context) {
      // TOOD IS ADMIN - CAN CREATE DIRECTIVE
      return Account.signup(args);
    },
    async updateUser(_parent, args, context) {},
    async deleteUser(_parent, args, context) {}
  }
};

export default userMutations;
