"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MailLockOutlined, PhoneInTalkRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <Box>
      <Typography variant="h3" color="textSecondary" align="center">
        Связаться с нами
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Typography variant="h6">Позвоните нам - </Typography>
        <Button
          startIcon={<PhoneInTalkRounded />}
          component="a"
          href="tel:+79200088057"
        >
          +7 (920) 008-80-57
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Typography variant="h6">Напишите нам - </Typography>
        <Button
          startIcon={<MailLockOutlined />}
          component="a"
          href="mailto:xxlaimxx1999@gmail.com"
        >
          xxlaimxx1999@gmail.com
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
