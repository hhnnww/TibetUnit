import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Button, TextField, Typography, Unstable_Grid2 } from "@mui/material";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { action } from "./action";
import { loader } from "./loader";
export { action, loader };
export default function Page() {
  const { comment_obj } = useLoaderData<typeof loader>();
  return (
    <Form method="POST">
      <Unstable_Grid2 container spacing={2}>
        <Unstable_Grid2 xs={12} sx={{ mb: 6 }}>
          <Button
            startIcon={<KeyboardBackspaceIcon />}
            component={Link}
            to={`/admin/page/edit/${comment_obj?.askId}`}
          >
            返回页面
          </Button>
        </Unstable_Grid2>
        <Unstable_Grid2 xs={12}>
          <Typography variant="h2">编辑回答</Typography>
        </Unstable_Grid2>

        {comment_obj &&
          Object.entries(comment_obj).map(([k, v]) => {
            if (!["id", "ask", "askId"].includes(k)) {
              return (
                <Unstable_Grid2 xs={12} key={k}>
                  <TextField
                    fullWidth
                    label={k.toUpperCase()}
                    name={k}
                    defaultValue={v}
                    required
                    multiline={k === "content" ? true : false}
                    rows={k === "content" ? 20 : undefined}
                  />
                </Unstable_Grid2>
              );
            }
          })}

        <Unstable_Grid2 xs={12}>
          <Button variant="contained" type="submit">
            保存
          </Button>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </Form>
  );
}
