import { objectType, extendType, list, nonNull, stringArg } from 'nexus';

import db from '../db.js';
import { Post } from './Post.js';
import { Comment } from './Comment.js';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id');
    t.nullable.string('email');
    t.nullable.string('name');
    t.list.field('posts', {
      type: Post,
      async resolve(parent, args, context, info) {
        const userId = parent.id;
        return db.post.findMany({ where: { userId } });
      },
    });
    t.list.field('comments', {
      type: Comment,
      async resolve(parent, args, context, info) {
        const userId = parent.id;
        return db.comment.findMany({ where: { userId } });
      },
    });
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
