import { ActionFunctionArgs } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const comment_id = parseInt(params.id as string);
  const formdata = Object.fromEntries(await request.formData());

  await prisma.comment.update({ where: { id: comment_id }, data: formdata });
  return null;
};
