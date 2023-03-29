import { objectType, extendType, nonNull, stringArg, intArg } from 'nexus';

import db from '../db.js';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('text');
  },
});

export const PostMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('newPost', {
      type: Post,
      args: {
        userId: nonNull(intArg()),
        text: nonNull(stringArg()),
      },
      async resolve(parent, args, context, info) {
        const data = {
          userId: args.userId,
          text: args.text,
        };
        return db.post.create({ data });
      },
    });
  },
});
