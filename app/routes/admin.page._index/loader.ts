import { json } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";

export const loader = async () => {
  const all_page = await prisma.ask.findMany({
    select: { id: true, title: true },
  });
  return json({ all_page });
};
