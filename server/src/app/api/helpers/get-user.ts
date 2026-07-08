import { cookies } from "next/headers";
import { SESSION_COOKIE_NAME } from "../constants/session";
import { prismaClient } from "@/lib/prisma/prismaClient";

export const getUser = async () => {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME);

  if (!sessionId?.value) {
    return null;
  }

  const session = await prismaClient.session.findUnique({
    where: {
      id: sessionId.value,
    },
    include: {
      user: true,
    },
  });

  if (!session?.user.login) {
    return null;
  }

  return session.user;
};
