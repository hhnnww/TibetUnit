import { Container } from "@mui/material";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { getSession } from "~/session";

export default function Component() {
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
