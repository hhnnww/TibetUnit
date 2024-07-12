import { type CssVarsThemeOptions } from "@mui/material";

export const components: CssVarsThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {},
  },

  MuiCardHeader: {
    styleOverrides: {
      title: {
        fontSize: "1.1rem",
        fontWeight: "bold",
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "filled",
    },
  },

  MuiFilledInput: {
    styleOverrides: {
      input: ({ theme }) => ({
        borderRadius: theme.vars.shape.borderRadius,
        ":-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 300px ${theme.vars.palette.background.default} inset !important`,
        },
      }),

      root: ({ theme }) => ({
        "::before": {
          display: "none",
        },
        "::after": {
          display: "none",
        },

        "&.Mui-focused": {
          outline: `2px solid ${theme.vars.palette.primary.main}`,
          backgroundColor: "transparent",
          borderColor: "transparent",
        },
        borderRadius: theme.vars.shape.borderRadius,
        backgroundColor: "transparent",
        borderColor: theme.vars.palette.divider,
        borderWidth: 1,
        borderStyle: "solid",
      }),
    },
  },

  MuiFormControl: {
    defaultProps: {
      variant: "filled",
    },
  },

  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        fontWeight: "bold",
      },
    },
  },

  MuiTypography: {
    styleOverrides: {
      body2: {
        fontWeight: "normal",
      },
    },
  },

  MuiCardActionArea: {
    styleOverrides: {
      root: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
      },
    },
  },

  MuiCard: {
    defaultProps: {
      variant: "outlined",
    },
  },
};
