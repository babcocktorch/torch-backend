import { PrismaClient } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { env } from './env';

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  adapter
});

export default prisma;