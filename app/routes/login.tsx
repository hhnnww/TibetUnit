import { Alert, Button, Container, Stack, TextField } from "@mui/material";
import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { commitSession, getSession } from "~/session";

export default function Page() {
  const login_form = [
    { name: "username", type: "text", label: "用户名" },
    { name: "password", type: "password", label: "密码" },
  ];
  const actiondata = useActionData<typeof action>();
  return (
    <Form method="POST">
      <Container>
        <Stack maxWidth={500} sx={{ margin: "0 auto", mt: "20vh" }} spacing={2}>
          {login_form.map((item) => {
            return <TextField {...item} key={item.name} />;
          })}
          <Button variant="contained" type="submit">
            登录
          </Button>
          {actiondata && <Alert color="error">{actiondata.msg}</Alert>}
        </Stack>
      </Container>
    </Form>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formdata = Object.fromEntries(await request.formData());
  if (
    formdata.username === "xizangyulongadmin" &&
    formdata.password === "112233qqwwee"
  ) {
    const session = await getSession(request.headers.get("Cookie"));
    session.set("userId", formdata.username);
    return redirect("/admin", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }
  return json({ msg: "用户名或者密码错误" });
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId")) {
    return redirect("/admin");
  }

  return null;
};

export const meta = [{ title: "登录" }];
