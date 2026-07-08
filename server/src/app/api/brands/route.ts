import { prismaClient } from "@/lib/prisma/prismaClient";
import { sleep } from "@/helpers/sleep";

export async function GET() {
  await sleep(2000);

  const brands = await prismaClient.brand.findMany();

  return Response.json(brands);
}
