import { Box, Divider, Unstable_Grid2 } from "@mui/material";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { ItemUser } from "./item-user";

type propsType = {
  id: number;
  content: string;
  name: string;
  avatar: string;
  publish_date: string;
  askId: number;
  address: string;

  saler: string;
  whatapp: string;
};

export const Model_回答模块 = (props: propsType) => {
  const content = props.content
    .replaceAll("${sale}", ` **${props.saler}**`)
    .replaceAll("${phone}", " **whatapp " + props.whatapp + "**");
  return (
    <>
      <Divider sx={{ mb: 5 }} />
      <Unstable_Grid2 container rowSpacing={2}>
        <ItemUser {...props} />
        <Unstable_Grid2 xs={12}>
          <Box sx={{ img: { maxWidth: "100%" } }}>
            <Markdown remarkPlugins={[remarkBreaks]}>{content}</Markdown>
          </Box>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </>
  );
};
