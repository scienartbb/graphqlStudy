import { objectType, extendType, list, nonNull, stringArg } from 'nexus';

import db from '../db.js';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nullable.string('email');
    t.nullable.string('name');
  },
});

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('users', {
      type: list(User),
      async resolve(parent, args, context, info) {
        return db.user.findMany({});
      },
    });
  },
});

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('newUser', {
      type: User,
      args: {
        email: nonNull(stringArg()),
        name: nonNull(stringArg()),
      },
      async resolve(parent, args, context, info) {
        const data = {
          email: args.email,
          name: args.name,
        };
        return db.user.create({ data });
      },
    });
  },
});
