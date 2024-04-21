"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MailLockOutlined, PhoneInTalkRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <Box mt={4} id="contacts">
      <Typography variant="h3" align="center">
        Связаться с нами
      </Typography>
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: "4px",
            padding: "8px",
            borderRadius: "8px",
            bgcolor: "#CAD6B2",
          }}
        >
          <Typography variant="h6" color="#172a48">
            Позвоните нам &mdash;
          </Typography>
          <Button
            startIcon={<PhoneInTalkRounded />}
            component="a"
            sx={{ color: "#172a48" }}
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
            padding: "8px",
            flexDirection: { xs: "column", md: "row" },
            borderRadius: "8px",
            bgcolor: "#CAD6B2",
          }}
        >
          <Typography variant="h6" color="#172a48">
            Напишите нам &mdash;
          </Typography>
          <Button
            startIcon={<MailLockOutlined />}
            component="a"
            sx={{ color: "#172a48" }}
            href="mailto:xxlaimxx1999@gmail.com"
          >
            xxlaimxx1999@gmail.com
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
