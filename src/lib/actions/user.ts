import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export async function getUserWithOrders(email: string) {
  return await prisma.user.findUnique({
    where: { email },
    include: { orders: true },
  });
}
