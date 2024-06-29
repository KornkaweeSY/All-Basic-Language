import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("🟢  Connected to database  ");
  } catch (error) {
    console.log("🔴  Not connect to database  ");
  } finally {
    await prisma.$disconnect();
  }
}