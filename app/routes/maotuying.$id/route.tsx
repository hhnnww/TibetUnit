import { Box, Container, Stack, useColorScheme } from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { ItemAsk } from "./item-ask";
import { ItemHeader } from "./item-header";
import { loader } from "./loader";
export { loader };

export default function Page() {
  const { setMode } = useColorScheme();
  setMode("light");

  const { ask_obj } = useLoaderData<typeof loader>();
  return (
    <>
      <ItemHeader />
      <Container maxWidth="md">
        <Stack spacing={2} mt={6}>
          {ask_obj && <ItemAsk ask_obj={ask_obj} />}
        </Stack>
        <Box mt={6}>{JSON.stringify(ask_obj)}</Box>
      </Container>
    </>
  );
}
