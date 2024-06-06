import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import {
  Alert,
  Button,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react";
import { action } from "./action";
import { loader } from "./loader";
export { action, loader };

export default function Page() {
  const { ask_obj } = useLoaderData<typeof loader>();
  const actiondata = useActionData<typeof action>();
  const help_text_list = {
    title: "标题",
    content: "内容",
    name: "名称",
    avatar: "头像",
    star: "评分，必须是数字",
    publish_date: "发布时间",
  };
  return (
    <>
      <Form method="POST">
        <Stack
          spacing={4}
          direction={"column"}
          alignItems={"flex-start"}
          sx={{ width: "100%" }}
        >
          <Button
            startIcon={<KeyboardBackspaceIcon />}
            component={Link}
            to="/admin/page"
          >
            返回
          </Button>
          <Typography variant="h2">编辑页面</Typography>
          {ask_obj &&
            Object.entries(ask_obj).map(([k, v]) => {
              if (!["id", "Comment"].includes(k)) {
                return (
                  <TextField
                    label={k.toUpperCase()}
                    defaultValue={v}
                    key={k}
                    required
                    rows={k === "content" ? 20 : undefined}
                    multiline={k === "content" ? true : false}
                    fullWidth
                    name={k}
                    helperText={Object.entries(help_text_list).map(
                      ([hk, hv]) => {
                        if (hk === k) {
                          return hv;
                        }
                      }
                    )}
                  />
                );
              }
            })}
          <Button
            variant="contained"
            type="submit"
            name="action"
            value="save_ask"
          >
            保存
          </Button>

          {actiondata && <Alert>{actiondata.msg}</Alert>}
        </Stack>
      </Form>

      <Divider sx={{ my: 10 }} />

      <Stack direction={"column"} spacing={4}>
        <Form method="POST">
          <Button
            variant="contained"
            type="submit"
            name="action"
            value="new_comment"
          >
            新建回答
          </Button>
        </Form>

        <Typography variant="h2">所有回答</Typography>

        <Stack spacing={8} direction={"column"}>
          {ask_obj?.Comment.map((item) => {
            return (
              <>
                <Paper elevation={1} sx={{ p: 2 }}>
                  <Stack spacing={4} alignItems={"start"}>
                    <Table key={item.id}>
                      <TableBody>
                        {Object.entries(item).map(([k, v]) => {
                          if (!["id", "askId"].includes(k)) {
                            return (
                              <TableRow key={k}>
                                <TableCell
                                  variant="head"
                                  sx={{ width: "150px" }}
                                >
                                  {k}
                                </TableCell>
                                <TableCell>{v}</TableCell>
                              </TableRow>
                            );
                          }
                        })}
                      </TableBody>
                    </Table>
                    <Button
                      variant="contained"
                      component={Link}
                      to={`/admin/comment/edit/${item.id}`}
                    >
                      编辑回复 {item.id}
                    </Button>
                  </Stack>
                </Paper>
              </>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}
