import { Container, useColorScheme } from "@mui/material";
import { LoaderFunctionArgs, MetaFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { getSession } from "~/session";
import { ItemHeader } from "./item-header";

export default function Page() {
  const { setMode } = useColorScheme();
  setMode("dark");
  return (
    <>
      <ItemHeader />

      <Container sx={{ py: 12 }}>
        <Outlet />
      </Container>
    </>
  );
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session.has("userId")) {
    return redirect("/login");
  }

  return null;
};

export const meta: MetaFunction = () => {
  return [{ title: "后台" }];
};
