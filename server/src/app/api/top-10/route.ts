import { prismaClient } from "@/lib/prisma/prismaClient";
import { getUser } from "../helpers/get-user";
import { NextResponse } from "next/server";
import { sleep } from "@/helpers/sleep";

export async function GET() {
  await sleep(2000);

  const user = await getUser();

  const products = await prismaClient.product.findMany({
    where: {
      top10: true,
    },
    include: {
      brand: true,
      userData: user ? {
        where: {
          userId: user.id,
        }
      } : false,
    },
  });

  return Response.json(
    products.map((product) => ({
      ...product,
      userData: product.userData
        ? { isFavorite: Boolean(product.userData?.[0]?.isFavorite) }
        : null,
    })),
    {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );
}

export async function OPTIONS() {
  const res = new NextResponse();

  res.headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Methods", "GET");

  return res;
}
