import { PrismaClient } from '@prisma/client';
import { getDatabaseUrl } from '../config/database';

process.env.DATABASE_URL ??= getDatabaseUrl();

export const prisma = new PrismaClient();
