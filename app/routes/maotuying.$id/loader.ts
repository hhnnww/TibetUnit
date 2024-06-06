import { json, LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const ask_id = parseInt(params.id as string);
  const ask_obj = await prisma.ask.findUnique({
    where: { id: ask_id },
    include: { Comment: true },
  });
  return json({ ask_obj });
};
