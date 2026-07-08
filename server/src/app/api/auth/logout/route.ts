import { prismaClient } from "@/lib/prisma/prismaClient";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "../../constants/session";

export async function DELETE() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME);

  if (!sessionId) {
    return NextResponse.json({ message: `success` });
  }

  await prismaClient.session.delete({
    where: {
      id: sessionId.value,
    },
  });

  const res = new NextResponse();
  res.cookies.delete({
    name: SESSION_COOKIE_NAME,
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Credentials", "true");

  return res;
}

export async function OPTIONS() {
  const res = new NextResponse();

  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Methods", "DELETE");

  return res;
}
