import { type CssVarsThemeOptions } from "@mui/material";

export const typography: CssVarsThemeOptions["typography"] = {
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  fontWeightRegular: 500,
  fontWeightBold: 700,

  h1: {
    fontWeight: 700,
    fontSize: "1.4rem",
  },

  h2: {
    fontWeight: 700,
    fontSize: "1.2rem",
  },
};
