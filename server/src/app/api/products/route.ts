import { prismaClient } from "@/lib/prisma/prismaClient";
import { getUser } from "../helpers/get-user";
import { NextRequest, NextResponse } from "next/server";
import { sleep } from "@/helpers/sleep";

export async function GET(req: NextRequest) {
  await sleep(2000);

  const user = await getUser();

  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "2");
  const offset = (page - 1) * limit;

  const brand = searchParams.get("brand");

  const products = await prismaClient.product.findMany({
    skip: offset,
    take: limit,
    where: {
      brand: {
        name: brand ?? undefined,
      },
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
