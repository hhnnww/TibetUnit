import { type CssVarsThemeOptions } from "@mui/material";

export const typography: CssVarsThemeOptions["typography"] = {
  fontFamily: ["Montserrat", "sans-serif"].join(","),

  h1: {
    fontWeight: "bold",
    fontSize: "1.6rem",
  },

  h2: {
    fontWeight: "bold",
    fontSize: "1.4rem",
  },
};
