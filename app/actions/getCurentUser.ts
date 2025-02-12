import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const currtentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });
    if (!currtentUser) {
      return null;
    }

    return {
      ...currtentUser,
      createdAt: currtentUser.createdAt.toISOString(),
      updatedAt: currtentUser.updateAt.toISOString(),
      emailVerified: currtentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    return null;
  }
}
