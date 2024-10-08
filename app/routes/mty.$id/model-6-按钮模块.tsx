import EmailIcon from "@mui/icons-material/Email";
import {
  Alert,
  Box,
  Button,
  Container,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

type propsType = {
  name: string;
  whatapp: string;
  whatapp_last: string;
  email: string;
};

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
        maxWidth="md"
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

      {/* 弹出模块 */}
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
                <Alert severity="success" sx={{ textAlign: "left" }}>
                  WhatsApp account copied successfully. Open WhatsApp and get in
                  touch with Gloria.
                </Alert>
              )}
              <Button
                size="large"
                startIcon={<EmailIcon />}
                variant="contained"
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "normal",
                  textTransform: "lowercase",
                }}
                // onClick={() => {
                //   copy(props.whatapp_last);
                //   setCopyed(true);
                // }}
                href={`mailto://${props.email}`}
              >
                {props.email}
              </Button>
              <Typography variant="body2">
                click to mail {props.name}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
