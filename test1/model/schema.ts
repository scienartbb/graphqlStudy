import { makeSchema } from 'nexus';
// import { nexusPrisma } from 'nexus-plugin-prisma';
// import path from 'path'; // const path = require('path'); // import 가 더 낫다고 함, https://velog.io/@fromzoo/require-vs-import
import { join } from 'path';
// import { nexusPrismaPlugin } from 'nexus-prisma';

import * as types from './types';

// schema는 typescript 파일 (.ts) 이어야 함. nexus 에서 graphql 생성할 때 필요한 듯 (yarn nexus 스크립트 생성해 둠)

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, 'generated', 'next-typegen.ts'),
    schema: join(__dirname, 'generated', 'schema.graphql'),
  },
  // contextType: {
  //   module: join(__dirname, 'context.ts'),
  //   export: 'context',
  // },
  // plugins: [
  //   nexusPrisma({
  //     // Fixes the Cannot find NexusPrisma issue
  //     // outputs: { typegen: __dirname + '/generated/index.ts' },
  //     experimentalCRUD: true,
  //   }),
  // ],
});
