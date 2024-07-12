import { Container, Divider, Unstable_Grid2 } from "@mui/material";

export const Model_底部模块 = () => {
  return (
    <>
      <Container sx={{ mt: 5, mb: 15 }} maxWidth="md">
        <Divider sx={{ mb: 5 }} />
        <Unstable_Grid2 container>
          <Unstable_Grid2 xs={12}>2024 @ tibetTravel</Unstable_Grid2>
        </Unstable_Grid2>
      </Container>
    </>
  );
};
