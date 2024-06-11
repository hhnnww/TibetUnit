import { Container, useColorScheme } from "@mui/material";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { getSession } from "~/session";

export default function Component() {
  const { mode, setMode } = useColorScheme();
  if (mode === "light") {
    setMode("dark");
  }
  return (
    <Container sx={{ my: 20 }}>
      <Outlet />
    </Container>
  );
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("userId") && session.data.userId !== "xizangyulongadmin") {
    return redirect("/login");
  }

  return null;
};
