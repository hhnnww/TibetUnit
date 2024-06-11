import { Container, Typography, Unstable_Grid2 } from "@mui/material";
import Markdown from "react-markdown";
type propsType = {
  title: string;
  content: string;
};

export const Model问题模块 = (props: propsType) => {
  return (
    <Container sx={{ mt: 5 }}>
      <Unstable_Grid2 container spacing={2}>
        <Unstable_Grid2 xs={12}>
          <Typography variant="h1">{props.title}</Typography>
        </Unstable_Grid2>

        <Unstable_Grid2 xs={12}>
          <Markdown>{props.content}</Markdown>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </Container>
  );
};
