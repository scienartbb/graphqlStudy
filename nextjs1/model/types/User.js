import { objectType, extendType, list, nonNull, stringArg } from 'nexus';
import { Post } from './Post';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('email');
    t.nullable.string('name');
    t.list.field('posts', {
      type: Post,
      async resolve(parent, args, context, info) {
        const authorId = parent.id;
        return context.db.post.findMany({ where: { authorId } });
      },
    });
  },
});

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('users', {
      type: list(User),
      args: {},
      async resolve(parent, args, context, info) {
        return context.db.user.findMany({});
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
        return context.db.user.create({ data });
      },
    });
  },
});
