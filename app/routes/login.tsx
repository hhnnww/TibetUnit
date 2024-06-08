import { Button, Container, Stack, TextField } from "@mui/material";
import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { Form } from "@remix-run/react";
import { commitSession, getSession } from "~/session";

export default function Component() {
  const login_form = [
    { label: "用户名", name: "username", type: "text" },
    { label: "密码", name: "password", type: "password" },
  ];
  return (
    <Container>
      <Form method="POST">
        <Stack sx={{ maxWidth: 400, margin: "0 auto", mt: "20vh" }} spacing={2}>
          {login_form.map((item) => (
            <TextField {...item} key={item.name} />
          ))}
          <Button variant="contained" type="submit">
            登录
          </Button>
        </Stack>
      </Form>
    </Container>
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
  return null;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId") && session.data.userId === "xizangyulongadmin") {
    return redirect("/admin");
  }

  return null;
};
