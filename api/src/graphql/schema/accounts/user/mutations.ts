const userMutations = {
  // async createUser(parent, args, { prisma }, info) {
  //   // const emailTaken = await prisma.exists.User({ email: args.data.email });
  //   // if (emailTaken) {
  //   //   throw new Error('Email taken');
  //   // }
  //   if (args.data.password.length < 8) {
  //     throw new Error('Password must be 8 characters or longer');
  //   }
  //   const hashedPassword = await bcrypt.hash(args.data.password, 10);
  //   const user = await prisma.mutation.createUser({
  //     data: {
  //       ...args.data,
  //       password: hashedPassword
  //     }
  //   });
  //   return {
  //     user,
  //     token: jwt.sign({ userId: user.id }, 'jwtsecret')
  //   };
  // },
  // async deleteUser(parent, args, { prisma }, info) {
  //   // const userExists = await prisma.exists.User({ id: args.id });
  //   // if (!userExists) {
  //   //   throw new Error('User not found');
  //   // }
  //   return prisma.mutation.deleteUser({ where: { id: args.id } }, info);
  // },
  // async updateUser(parent, args, { prisma }, info) {
  //   prisma.mutation.updateUser(
  //     {
  //       where: { id: args.id },
  //       data: args.data
  //     },
  //     info
  //   );
  // }
};

export default userMutations;
