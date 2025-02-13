import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: new Date(currentUser.createdAt),
      updatedAt: new Date(currentUser.updateAt), // updatedAt olmalı
      emailVerified: currentUser.emailVerified
        ? new Date(currentUser.emailVerified)
        : null,
    };
  } catch {
    return null;
  }
}
