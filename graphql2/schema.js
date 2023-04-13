import { makeSchema } from 'nexus';

import * as types from './model/index.js';

export const schema = makeSchema({
  types,
});
