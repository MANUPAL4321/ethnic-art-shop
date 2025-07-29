import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // ✅ This path must be correct
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const { productId, quantity } = await req.json();

  if (!productId || !quantity) {
    return new Response(JSON.stringify({ message: "Missing data" }), {
      status: 400,
    });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  const existingCartItem = await prisma.cartItem.findFirst({
    where: {
      userId: user.id,
      productId,
    },
  });

  if (existingCartItem) {
    await prisma.cartItem.update({
      where: { id: existingCartItem.id },
      data: {
        quantity: existingCartItem.quantity + quantity,
      },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        userId: user.id,
        productId,
        quantity,
      },
    });
  }

  return new Response(JSON.stringify({ message: "Cart updated" }), {
    status: 200,
  });
}
