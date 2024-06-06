import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { NavLink } from "@remix-run/react";

export const ItemHeader = () => {
  const menu_list = [
    { name: "首页", link: "/admin" },
    { name: "所有页面", link: "/admin/page" },
  ];
  return (
    <AppBar position="static" variant="outlined" elevation={0}>
      <Toolbar>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={4}
          width={"100%"}
        >
          <Box>
            <Typography variant="h1" sx={{ fontSize: "1.2rem" }}>
              tibetunit
            </Typography>
          </Box>
          <Stack direction={"row"} spacing={2}>
            {menu_list.map((item) => {
              return <MenuItem {...item} key={item.link} />;
            })}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

const MenuItem = ({ name, link }: { name: string; link: string }) => {
  return (
    <Button
      component={NavLink}
      to={link}
      color="inherit"
      sx={(theme) => ({
        "&.active": { backgroundColor: theme.palette.primary.main },
      })}
      end
    >
      {name}
    </Button>
  );
};
