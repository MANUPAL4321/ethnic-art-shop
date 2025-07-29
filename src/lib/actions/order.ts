import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export async function createOrder(userId: string, total: number) {
  return await prisma.order.create({
    data: {
      userId,
      total,
    },
  });
}
