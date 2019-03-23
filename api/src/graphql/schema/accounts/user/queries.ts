import Account from '../../../../models/account';

const userQueries = {
  Query: {
    user: async () => {
      return { name: 'Matt' };
    },
    users: async () => {
      return Account.getUsers();
    }
  }
};

export default userQueries;
