import { Container, Typography, Unstable_Grid2 } from "@mui/material";
import Markdown from "react-markdown";
import { ItemUser } from "./item-user";

type propsType = {
  id: number;
  title: string;
  content: string;
  name: string;
  avatar: string;
  star: string;
  publish_date: string;
  address: string;
};

export const Model问题模块 = (props: propsType) => {
  return (
    <Container sx={{ mt: 5 }}>
      <Unstable_Grid2 container spacing={2}>
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
          <Markdown>{props.content}</Markdown>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </Container>
  );
};
