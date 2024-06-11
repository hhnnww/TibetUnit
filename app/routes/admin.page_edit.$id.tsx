import {
  Alert,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  Unstable_Grid2,
} from "@mui/material";
import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { prisma } from "prisma/prisma.server";

export default function Component() {
  const { page, comments } = useLoaderData<typeof loader>();
  const actiondata = useActionData<typeof action>();
  return (
    <Unstable_Grid2 container spacing={12}>
      <Unstable_Grid2 xs={12}>
        <Button component={Link} variant="contained" to={"/admin"}>
          返回
        </Button>
      </Unstable_Grid2>
      <Unstable_Grid2 xs={12}>
        <Form method="POST">
          <Stack spacing={2}>
            <Typography variant="h2">编辑页面</Typography>
            <input name="type" value="ask" hidden />
            {page &&
              Object.entries(page).map(([k, v]) => (
                <TextField
                  label={k}
                  key={k}
                  defaultValue={v}
                  name={k}
                  multiline={k === "content" ? true : false}
                  rows={k === "content" ? 20 : undefined}
                  inputProps={{ readOnly: k === "id" ? true : false }}
                  required
                />
              ))}
            <Button variant="contained" type="submit">
              保存
            </Button>
            <Button
              variant="contained"
              type="submit"
              name="action"
              value="new_comment"
            >
              新增回答
            </Button>
            {actiondata?.msg.ask && <Alert>{actiondata.msg.ask}</Alert>}
          </Stack>
        </Form>
      </Unstable_Grid2>

      {comments &&
        comments.map((item) => (
          <Unstable_Grid2 xs={12} key={item.id}>
            <Divider sx={{ mb: 12 }} />
            <Form method="POST">
              <Stack spacing={2}>
                <Typography variant="h2">编辑回答 #{item.id}</Typography>
                <input name="type" value="comment" hidden />
                {Object.entries(item).map(([k, v]) => (
                  <TextField
                    label={k}
                    key={k}
                    defaultValue={v}
                    name={k}
                    multiline={k === "content" ? true : false}
                    rows={k === "content" ? 20 : undefined}
                    inputProps={{
                      readOnly: ["id", "askId"].includes(k) ? true : false,
                    }}
                    required
                    type={
                      ["id", "askId", "star"].includes(k) ? "number" : "text"
                    }
                  />
                ))}
                <Button type="submit" variant="contained">
                  保存
                </Button>
                {actiondata?.msg.comment &&
                  actiondata.msg.comment_id === item.id && (
                    <Alert>{actiondata.msg.comment}</Alert>
                  )}
              </Stack>
            </Form>
          </Unstable_Grid2>
        ))}
    </Unstable_Grid2>
  );
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const page_id = parseInt(params.id as string);
  const page = await prisma.ask.findUnique({
    where: { id: page_id },
  });
  const comments = await prisma.comment.findMany({
    where: { askId: page_id },
    orderBy: {
      id: "asc",
    },
  });
  return json({ page, comments });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formdata = Object.fromEntries(await request.formData());
  const obj_id = parseInt(formdata.id as string);
  const msg: { ask: string; comment: string; comment_id: number } = {
    ask: "",
    comment: "",
    comment_id: 0,
  };

  if (formdata.action === "new_comment") {
    await prisma.comment.create({ data: { askId: obj_id } });
    msg.ask = "新增回答成功";
    return json({ msg });
  }

  if (formdata.type === "ask") {
    delete formdata.id;
    delete formdata.type;

    await prisma.ask.update({ where: { id: obj_id }, data: formdata });
    msg.ask = "保存成功";
    return json({ msg });
  }

  if (formdata.type === "comment") {
    delete formdata.id;
    delete formdata.type;
    delete formdata.askId;

    await prisma.comment.update({ where: { id: obj_id }, data: formdata });
    msg.comment = "保存成功";
    msg.comment_id = obj_id;
    return json({ msg });
  }
  return json({ msg });
};
