import { json, LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const ask_id = parseInt(params.id as string);

  return json({
    ask_obj: await prisma.ask.findFirst({
      where: { id: ask_id },
      include: { Comment: { orderBy: { id: "asc" } } },
    }),
  });
};
