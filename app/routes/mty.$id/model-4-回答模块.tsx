import { Container, Divider, Unstable_Grid2 } from "@mui/material";
import { ItemUser } from "./item-user";

type propsType = {
  id: number;
  content: string;
  name: string;
  avatar: string;
  star: string;
  publish_date: string;
  address: string;
};

export const Model_回答模块 = (props: propsType) => {
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Divider sx={{ mb: 5 }} />
        <Unstable_Grid2 container spacing={2}>
          <ItemUser {...props} />
          <Unstable_Grid2 xs={12}>{props.content}</Unstable_Grid2>
        </Unstable_Grid2>
      </Container>
    </>
  );
};
