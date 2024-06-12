import CircleIcon from "@mui/icons-material/Circle";
import { Avatar, Stack, Typography, Unstable_Grid2 } from "@mui/material";

export const ItemUser = (props: {
  name: string;
  address: string;
  avatar: string;
  publish_date: string;
}) => {
  return (
    <>
      <Unstable_Grid2 xs={12}>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Avatar src={props.avatar} />
          <Stack>
            <Typography sx={{ fontWeight: 600, fontSize: 18, lineHeight: 1 }}>
              {props.name}
            </Typography>

            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={0.5}
              sx={(theme) => ({ color: theme.palette.text.secondary })}
            >
              <Typography variant="body2">{props.address}</Typography>
              <CircleIcon sx={{ fontSize: 3 }} />
              <Typography variant="body2">{props.publish_date}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Unstable_Grid2>
    </>
  );
};
