import { sleep } from "@/helpers/sleep";
import { prismaClient } from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";
import { getUser } from "../../helpers/get-user";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  await sleep(5000);
  const { productId } = await params;
  const user = await getUser();

  const product = await prismaClient.product.findUnique({
    where: {
      id: parseInt(productId),
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

  if (!product) {
    return Response.json(
      { error: `Product by id - ${productId} not found` },
      {
        status: 404,
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Access-Control-Allow-Credentials": "true",
        },
      }
    );
  }

  return Response.json(
    {
      product: {
        ...product,
        userData: product.userData
          ? { isFavorite: Boolean(product.userData?.[0]?.isFavorite) }
          : null,
      },
    },
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
