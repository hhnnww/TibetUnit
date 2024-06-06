import { ActionFunctionArgs, json } from "@remix-run/node";
import { prisma } from "prisma/prisma.server";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const ask_id = parseInt(params.id as string);
  const formdata = Object.fromEntries(await request.formData());

  if (formdata.action === "save_ask") {
    delete formdata.action;
    await prisma.ask.update({ where: { id: ask_id }, data: formdata });
    return json({ msg: "页面保存成功" });
  }

  if (formdata.action === "new_comment") {
    await prisma.comment.create({ data: { askId: ask_id } });
    return json({ msg: "新建回答成功" });
  }

  return json({ msg: "success" });
};
