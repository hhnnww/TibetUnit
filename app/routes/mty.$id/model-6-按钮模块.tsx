import TouchAppIcon from "@mui/icons-material/TouchApp";
import {
  Alert,
  Box,
  Button,
  Container,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import copy from "copy-to-clipboard";
import { useState } from "react";

type propsType = { name: string; whatapp: string; whatapp_last: string };

export const Model_按钮模块 = (props: propsType) => {
  const [open, setOpen] = useState(false);
  const [copyed, setCopyed] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCopyed(false);
  };

  return (
    <>
      <Container
        sx={{
          position: "fixed",
          bottom: 0,
          margin: "0 auto",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            // borderRadius: 0,
            // py: 1,
            textTransform: "none",
            fontSize: "1.3rem",
            fontWeight: "normal",
          }}
          onClick={handleOpen}
        >
          add Jorney2Tibet {props.name}'s WhatsApp
        </Button>
      </Container>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 12,
            p: 4,
            borderRadius: 1,
            width: "500px",
            maxWidth: "80%",
            "& img": {
              width: "100%",
              borderRadius: 1,
            },
            textAlign: "center",
          }}
        >
          <Stack spacing={3} direction={"column"}>
            <img src="/erweima.jpg" />
            <Stack direction={"column"} spacing={1}>
              {copyed && (
                <Alert severity="success">
                  WhatsApp account copied successfully. Open WhatsApp and get in
                  touch with Gloria.
                </Alert>
              )}
              <Button
                size="large"
                startIcon={<TouchAppIcon />}
                variant="contained"
                sx={{ fontSize: "1.2rem", fontWeight: "normal" }}
                onClick={() => {
                  copy(props.whatapp_last);
                  setCopyed(true);
                }}
              >
                {props.whatapp}
              </Button>
              <Typography variant="body2">
                click to copy {props.name} WhatsApp account
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
