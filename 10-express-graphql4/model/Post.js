import { objectType, extendType, nonNull, stringArg, intArg } from 'nexus';
import { list } from 'nexus';
import db from '../db.js';
import { Comment } from './Comment.js';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('text');
    t.list.field('comments', {
      type: Comment,
      async resolve(parent, args, context, info) {
        const postId = parent.id;
        return db.comment.findMany({ where: { postId } });
      },
    });
    t.list.string('tags', {
      async resolve(parent, args, context, info) {
        const postId = parent.id;
        return db.postTag.findMany({ where: { postId } });
      },
    });
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
        tags: list(stringArg()),
      },
      async resolve(parent, args, context, info) {
        const data = {
          userId: args.userId,
          text: args.text,
        };
        db.tag.create([])
        return db.post.create({ data });
      },
    });
  },
});
