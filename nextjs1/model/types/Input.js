import { inputObjectType } from 'nexus';
export const PageInputType = inputObjectType({
  name: 'PageInputType',
  definition(t) {
    t.int('page');
    t.int('itemCount');
  },
});
