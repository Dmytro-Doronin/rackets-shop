import { sleep } from "@/helpers/sleep";
import { prismaClient } from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "../../constants/session";

export async function POST(req: Request) {
  await sleep(2000);

  const { login, password } = await req.json();

  if (typeof login !== "string" || typeof password !== "string") {
    return NextResponse.json({ error: `invalid data` }, { status: 401 });
  }

  const user = await prismaClient.user.findUnique({
    where: {
      login,
    },
  });

  if (!user) {
    return NextResponse.json({ error: `invalid data` }, { status: 401 });
  }

  if (user.password !== password) {
    return NextResponse.json({ error: `invalid data` }, { status: 401 });
  }

  const sessionId = `${Date.now()}-${login}`;

  await prismaClient.session.create({
    data: {
      id: sessionId,
      userId: user.id,
    },
  });

  const res = new NextResponse();
  res.cookies.set({
    value: sessionId,
    name: SESSION_COOKIE_NAME,
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Credentials", "true");

  return res;
}
