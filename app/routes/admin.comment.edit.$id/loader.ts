import { json, LoaderFunctionArgs } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const comment_id = parseInt(params.id as string);
  const comment_obj = await prisma.comment.findUnique({
    where: { id: comment_id },
    include: { ask: { select: { id: true, title: true } } },
  });
  return json({ comment_obj });
};
