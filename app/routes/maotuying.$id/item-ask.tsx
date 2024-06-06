import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import { IconButton, Stack, Typography } from "@mui/material";

export const ItemAsk = ({
  ask_obj,
}: {
  ask_obj: {
    id: number;
    title: string;
    content: string;
    name: string;
    avatar: string;
    star: string;
    publish_date: string;
    address: string;
    Comment: {
      id: number;
      content: string;
      name: string;
      avatar: string;
      star: string;
      publish_date: string;
      address: string;
      askId: number;
    }[];
  };
}) => {
  return (
    <Stack spacing={2}>
      <Stack
        direction={["column", "row"]}
        justifyContent={["normal", "space-between"]}
        alignItems={["start", "center"]}
      >
        <Typography variant="h2">{ask_obj.title}</Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          sx={{ pt: [2, 0] }}
        >
          <IconButton sx={{ color: "#333", border: "1px solid #333" }}>
            <IosShareOutlinedIcon />
          </IconButton>
          <IconButton sx={{ color: "#333" }}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Typography>{ask_obj.content}</Typography>
    </Stack>
  );
};
