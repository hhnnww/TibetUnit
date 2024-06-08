import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Unstable_Grid2,
} from "@mui/material";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { prisma } from "prisma/prisma.server";

export default function Component() {
  const { page_list } = useLoaderData<typeof loader>();
  return (
    <>
      <Unstable_Grid2 container spacing={8}>
        {page_list.map((item) => (
          <Unstable_Grid2 xs={12} key={item.id}>
            <Card variant="elevation">
              <CardHeader title={item.title ? item.title : "无标题文档"} />
              <CardContent>
                <Box>
                  <Typography>{item.content}</Typography>
                </Box>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  color="inherit"
                  component={Link}
                  to={`/admin/page_edit/${item.id}`}
                >
                  编辑
                </Button>
                <Button color="inherit">预览</Button>
              </CardActions>
            </Card>
          </Unstable_Grid2>
        ))}
      </Unstable_Grid2>
    </>
  );
}

export const loader = async () => {
  const page_list = await prisma.ask.findMany({
    select: { id: true, title: true, content: true },
  });
  return json({ page_list });
};
