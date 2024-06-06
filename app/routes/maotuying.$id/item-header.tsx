import LanguageIcon from "@mui/icons-material/Language";
import {
  AppBar,
  Button,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

export const ItemHeader = () => {
  return (
    <>
      <AppBar position="static" elevation={0} color="inherit">
        <Toolbar sx={{ px: 0 }}>
          <Container>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ width: "100%" }}
            >
              <Typography variant="h1" sx={{ fontSize: "1.4rem" }}>
                Tripadvisor
              </Typography>

              <ItemMenu />

              <ItemIconMenu />
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
};

const ItemMenu = () => {
  const menu_list = ["Discover", "Trips", "Review", "More"];
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{ display: ["none", "flex"] }}
    >
      {menu_list.map((item) => {
        return <HeaderButton key={item}>{item}</HeaderButton>;
      })}
    </Stack>
  );
};

const ItemIconMenu = () => {
  return (
    <Stack direction={"row"}>
      <HeaderButton icon={<LanguageIcon />}>USD</HeaderButton>
      <HeaderButton>Sign in</HeaderButton>
    </Stack>
  );
};

const HeaderButton = ({
  children,
  icon,
}: {
  children: JSX.Element | string;
  icon?: JSX.Element;
}) => {
  return (
    <Button
      color="inherit"
      sx={{
        borderRadius: 999,
        px: 1.2,
        py: 0.5,
        textTransform: "capitalize",
        fontSize: "1rem",
        fontWeight: 600,
      }}
      startIcon={icon ? icon : null}
    >
      {children}
    </Button>
  );
};
