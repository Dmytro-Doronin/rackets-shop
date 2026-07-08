import { sleep } from "@/helpers/sleep";
import { prismaClient } from "@/lib/prisma/prismaClient";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "../../constants/session";

export async function GET() {
  await sleep(500);

  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME);

  if (!sessionId?.value) {
    return NextResponse.json({ error: `no session` }, { status: 401 });
  }

  const session = await prismaClient.session.findUnique({
    where: {
      id: sessionId.value,
    },
    include: {
      user: true,
    },
  });

  const login = session?.user.login;

  if (!login) {
    return NextResponse.json({ error: `no session` }, { status: 401 });
  }

  return NextResponse.json({
    user: {
      login,
      isAdmin: session.user.isAdmin,
    },
  });
}
