import { Divider, Unstable_Grid2 } from "@mui/material";
import Markdown from "react-markdown";
import { ItemUser } from "./item-user";
type propsType = {
  id: number;
  content: string;
  name: string;
  avatar: string;
  publish_date: string;
  askId: number;
  address: string;
};

export const Model_回答模块 = (props: propsType) => {
  return (
    <>
      <Divider sx={{ mb: 5 }} />
      <Unstable_Grid2 container rowSpacing={2}>
        <ItemUser {...props} />
        <Unstable_Grid2 xs={12}>
          <Markdown>{props.content}</Markdown>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </>
  );
};
