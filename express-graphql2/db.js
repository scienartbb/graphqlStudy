import { PrismaClient } from '@prisma/client';

if (!global.db) {
  global.db = new PrismaClient();
}
const db = global.db;
export default db;
