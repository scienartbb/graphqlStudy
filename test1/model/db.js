import { PrismaClient } from '@prisma/client';
const opt = {
  log: [
    {
      emit: 'stdout',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
  errorFormat: 'pretty',
};

// console.log(global)
// 경고발생: warn(prisma-client) There are already 10 instances of Prisma Client actively running.
// 해결책인지 아직 명확하지 않음
if (!global.db) {
  const dev = process.env.NODE_ENV !== 'production';
  global.db = new PrismaClient(dev ? opt : null);
}
export const db = global.db;
