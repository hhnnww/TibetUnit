import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { sx } from "./item-button-sx";

export const Model_顶部菜单 = () => {
  return (
    <AppBar variant="outlined" color="inherit" position="static" elevation={0}>
      <Toolbar>
        <Container sx={{ px: [0, 0, 0, 3] }} disableGutters>
          <Stack
            alignItems={"center"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Logo />
            <HeaderMenu />
            <HeaderRightMenu />
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

const Logo = () => {
  return (
    <>
      <Typography variant="h1" sx={{ fontWeight: "bold" }}>
        Tripadvisor
      </Typography>
    </>
  );
};

const HeaderMenu = () => {
  const header_menu_list = ["Discover", "Trips", "Review"];
  return (
    <Stack
      direction={"row"}
      sx={{ display: ["none", "none", "flex"] }}
      spacing={1}
    >
      {header_menu_list.map((item) => (
        <Button sx={sx} key={item}>
          {item}
        </Button>
      ))}
    </Stack>
  );
};

const HeaderRightMenu = () => {
  const sign_sx = {
    ...sx,
    ...{
      backgroundColor: "#000",
      color: "#fff",
      ":hover": { backgroundColor: "#000" },
      display: ["none", "block"],
    },
  };
  return (
    <Stack direction={"row"} spacing={1}>
      <Button
        sx={sx}
        startIcon={
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.654 10.255h4.178c-.07-1.591-.356-2.993-.766-4.017-.238-.594-.502-1.023-.756-1.293-.211-.223-.38-.3-.5-.32a6.56 6.56 0 00-.133 0c-.12.02-.29.097-.5.32-.255.27-.519.7-.756 1.293-.41 1.024-.697 2.426-.767 4.017zm-.374-5.14c-.09.18-.174.37-.252.565-.491 1.227-.805 2.825-.875 4.575H5.399a6.388 6.388 0 013.88-5.14zm2.301-1.99a7.883 7.883 0 00-7.726 7.88 7.88 7.88 0 007.883 7.886c.585 0 .872-.015 1.111-.074.123-.031.172-.05.213-.064.058-.02.099-.036.312-.073l-.26-1.478a3.842 3.842 0 00-.462.107c-.087.026-.113.035-.127.04a.286.286 0 01-.04.012c-.03.008-.132.03-.742.03-.122 0-.313-.06-.566-.327-.255-.27-.519-.7-.756-1.293-.41-1.024-.697-2.425-.767-4.016h4.203a4.673 4.673 0 01-.225 1.255l-.012.041-.005.016c-.033.113-.088.297-.099.478l1.498.088v.006s.007-.036.044-.162l.012-.04c.037-.125.089-.297.136-.504.072-.313.134-.698.152-1.178h2.734a4.156 4.156 0 01-.195.949c-.055.159-.11.28-.166.402l-.004.01a1.844 1.844 0 00-.171.507l1.484.219-.005.026s.012-.032.057-.13l.008-.018c.056-.123.137-.3.215-.53.168-.488.311-1.167.311-2.185a7.878 7.878 0 00-7.72-7.88 1.938 1.938 0 00-.325 0zm2.626 1.99c.09.181.173.37.252.565.49 1.227.804 2.825.875 4.575h2.749a6.384 6.384 0 00-3.876-5.14zM9.284 16.902a7.763 7.763 0 01-.256-.573c-.49-1.227-.805-2.824-.875-4.574H5.399a6.386 6.386 0 003.885 5.147z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.833 12.778h-8.75v6.648h5.255l3.495 2.325v-8.973zm-1.5 1.5v4.673l-1.542-1.025h-4.209v-3.648h5.75z"
            ></path>
          </svg>
        }
      >
        USD
      </Button>
      <Button sx={sign_sx}>Sign in</Button>
    </Stack>
  );
};
