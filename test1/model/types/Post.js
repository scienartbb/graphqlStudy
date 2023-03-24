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
import { User } from './User';

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
        return context.db.user.findMany({ where: { id } });
      },
    });
  },
});
