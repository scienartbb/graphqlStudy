const users = [
  { name: 'name1', email: 'a@a.com' },
  { name: 'name2', email: 'b@b.com' },
];

export const resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      return users;
    },
  },

  Mutation: {
    newUser: async (parent, args, context, info) => {
      const { name, email } = args;
      const v = { name, email };
      users.push(v);
      return v;
    },
  },
};
