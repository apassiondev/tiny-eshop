import 'dotenv/config';
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";
import pg from 'pg';

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
})
const adapter = new PrismaPg(pool)

const globalForPrisma = global as unknown as { prisma: PrismaClient }

//  Use existing client or create a new one with v7 adapter - consuming the singleton pattern
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}
