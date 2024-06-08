import { type CssVarsThemeOptions } from "@mui/material";

export const typography: CssVarsThemeOptions["typography"] = {
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  fontWeightRegular: 400,
  fontWeightBold: 600,

  h1: {
    fontWeight: 600,
    fontSize: "1.4rem",
  },

  h2: {
    fontWeight: 600,
    fontSize: "1.2rem",
  },
};
