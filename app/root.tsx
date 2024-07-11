// import "@fontsource/montserrat/500.css";
// import "@fontsource/montserrat/700.css";

import {
  CssBaseline,
  Experimental_CssVarsProvider,
  getInitColorSchemeScript,
} from "@mui/material";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { theme } from "./theme";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning={true}>
        <Experimental_CssVarsProvider
          theme={theme}
          defaultColorScheme={"light"}
          defaultMode={"light"}
        >
          {getInitColorSchemeScript()}
          <CssBaseline />
          {children}
        </Experimental_CssVarsProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
