import { ActionFunctionArgs } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formdata = Object.fromEntries(await request.formData());
  console.log(formdata);
  if (formdata.action === "new_page") {
    await prisma.ask.create({});
  }

  if (formdata.action === "delete") {
    await prisma.ask.delete({ where: { id: parseInt(formdata.id as string) } });
  }

  return null;
};
