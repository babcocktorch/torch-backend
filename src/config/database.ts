import { PrismaPg } from '@prisma/adapter-pg';
import { env } from './env';
import { PrismaClient } from '../../prisma/generated/prisma/client'


const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });

const prisma = new PrismaClient({
  log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  adapter
});

export default prisma;