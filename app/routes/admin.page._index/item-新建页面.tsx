import AddIcon from "@mui/icons-material/Add";
import { Button, Unstable_Grid2 } from "@mui/material";
import { Form } from "@remix-run/react";

export const Item新建页面 = () => {
  return (
    <Unstable_Grid2 xs={12}>
      <Form method="POST">
        <Button
          type="submit"
          variant="contained"
          name="action"
          value="new_page"
          startIcon={<AddIcon />}
        >
          新建页面
        </Button>
      </Form>
    </Unstable_Grid2>
  );
};
