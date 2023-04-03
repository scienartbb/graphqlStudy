import { objectType, extendType, nonNull, stringArg, intArg } from 'nexus';

import db from '../db.js';
import { Post } from './Post.js';

export const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('text');
    t.nonNull.field('post', {
      type: Post,
      async resolve(parent, args, context, info) {
        const postId = parent.postId;
        return db.post.findUnique({ where: { id: postId } });
      },
    });
  },
});

export const CommentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('newComment', {
      type: Comment,
      args: {
        userId: nonNull(intArg()),
        postId: nonNull(intArg()),
        text: nonNull(stringArg()),
      },
      async resolve(parent, args, context, info) {
        const data = {
          userId: args.userId,
          postId: args.postId,
          text: args.text,
        };
        return db.comment.create({ data });
      },
    });
  },
});
