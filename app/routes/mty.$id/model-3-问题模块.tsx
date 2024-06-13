import { Box, Typography, Unstable_Grid2 } from "@mui/material";
import Markdown from "react-markdown";
import { ItemUser } from "./item-user";

type propsType = {
  id: number;
  title: string;
  content: string;
  name: string;
  avatar: string;
  publish_date: string;
  address: string;
};

export const Model_问题模块 = (props: propsType) => {
  return (
    <Unstable_Grid2 container rowSpacing={4}>
      <Unstable_Grid2 xs={12}>
        <Typography variant="h1">{props.title}</Typography>
      </Unstable_Grid2>

      <ItemUser
        address={props.address}
        avatar={props.avatar}
        name={props.name}
        publish_date={props.publish_date}
      />

      <Unstable_Grid2 xs={12}>
        <Box sx={{ "& > p": { marginBlockStart: 0 } }}>
          <Markdown>{props.content}</Markdown>
        </Box>
      </Unstable_Grid2>
    </Unstable_Grid2>
  );
};
