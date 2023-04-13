import { objectType } from 'nexus';
import { User } from './User';
import { db } from '@/model/context.js';

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('title');
    t.nullable.string('content');
    t.nonNull.boolean('published');
    t.field('author', {
      type: User,
      async resolve(parent, args, context, info) {
        const id = parent.authorId;
        return db.user.findMany({ where: { id } });
      },
    });
  },
});
