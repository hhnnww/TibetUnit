import { json, LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const ask_id = parseInt(params.id as string);

  const ask_obj = await prisma.ask.findFirst({
    where: { id: ask_id },
  });

  const comments_obj = await prisma.comment.findMany({
    where: {
      askId: ask_id,
    },
  });

  return json({ ask_obj, comments_obj });
};
