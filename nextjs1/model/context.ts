import { PrismaClient } from '@prisma/client';
import { db } from '@/model/db';

export interface Context {
  db: PrismaClient;
}

export const context = { db };
