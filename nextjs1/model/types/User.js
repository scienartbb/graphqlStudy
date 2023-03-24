import {
  nonNull,
  nullable,
  objectType,
  extendType,
  stringArg,
  intArg,
  enumType,
  inputObjectType,
  list,
} from 'nexus';
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
