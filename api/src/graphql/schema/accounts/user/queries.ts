const userQueries = {
  Query: {
    user: async () => {
      return { name: 'Matt' };
    },
    users: async () => {
      return [{ id: 1, name: 'matt' }, { id: 2, name: 'tim' }];
    }
  }
};

export default userQueries;
