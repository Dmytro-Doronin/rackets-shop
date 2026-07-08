import { sleep } from "@/helpers/sleep";
import { prismaClient } from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  await sleep(2000);
  const { productId } = await params;

  const product = await prismaClient.product.findUnique({
    where: {
      id: parseInt(productId),
    },
    include: {
      brand: true,
    },
  });

  if (!product) {
    return NextResponse.json(
      { error: `Product by id - ${productId} not found` },
      { status: 404 }
    );
  }

  return NextResponse.json({ product });
}
