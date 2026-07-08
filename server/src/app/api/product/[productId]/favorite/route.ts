import { sleep } from "@/helpers/sleep";
import { prismaClient } from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";
import { getUser } from "@/app/api/helpers/get-user";

export async function POST(
  _: Request,
  {
    params,
  }: {
    params: Promise<{ productId: string }>;
  }
) {
  await sleep(2000);

  const user = await getUser();

  if (!user) {
    return NextResponse.json({ error: `no session` }, { status: 401 });
  }

  const { productId } = await params;

  await prismaClient.userProduct.upsert({
    where: {
      userId_productId: {
        userId: user.id,
        productId: parseInt(productId),
      },
    },
    update: {
      isFavorite: true,
    },
    create: {
      userId: user.id,
      productId: parseInt(productId),
      isFavorite: true,
    },
  });

  const res = new NextResponse();

  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Credentials", "true");

  return res;
}

export async function DELETE(
  _: Request,
  {
    params,
  }: {
    params: Promise<{ productId: string }>;
  }
) {
  await sleep(2000);

  const user = await getUser();

  if (!user) {
    return NextResponse.json({ error: `no session` }, { status: 401 });
  }

  const { productId } = await params;

  await prismaClient.userProduct.upsert({
    where: {
      userId_productId: {
        userId: user.id,
        productId: parseInt(productId),
      },
    },
    update: {
      isFavorite: false,
    },
    create: {
      userId: user.id,
      productId: parseInt(productId),
      isFavorite: false,
    },
  });

  const res = new NextResponse();

  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Credentials", "true");

  return res;
}

export async function OPTIONS() {
  const res = new NextResponse();

  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Methods", "POST, DELETE");

  return res;
}
