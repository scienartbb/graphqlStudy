import { PrismaClient } from '@prisma/client';
if (!global.db) {
  global.db = new PrismaClient();
}
export const db = global.db;
