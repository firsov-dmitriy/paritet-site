"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  MailLockOutlined,
  PermPhoneMsg,
  PhoneInTalkRounded,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <Box mt={4} id="contacts">
      <Typography variant="h3" align="center">
        Связаться с нами
      </Typography>
      <Box>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Button
            href="tel:+79200088057"
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: "4px",
              padding: "24px",
              borderRadius: "8px",
              bgcolor: "#f5f5f5",
              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
                color: "#172a48",
                bgcolor: "#f5f5f5",
              },
            }}
          >
            <Typography variant="h6" color="#172a48">
              Позвоните нам &mdash;
            </Typography>
            <Button
              startIcon={<PhoneInTalkRounded />}
              component="a"
              sx={{ color: "#172a48", "&:hover": { bgcolor: "#f5f5f5" } }}
            >
              +7 (920) 008-80-57
            </Button>
          </Button>

          <Button
            href="mailto:xxlaimxx1999@gmail.com"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "24px",
              flexDirection: { xs: "column", md: "row" },
              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
                color: "#172a48",
                bgcolor: "#f5f5f5",
              },
              borderRadius: "8px",
              bgcolor: "#f5f5f5",
            }}
          >
            <Typography variant="h6" color="#172a48">
              Напишите нам &mdash;
            </Typography>
            <Button
              startIcon={<MailLockOutlined />}
              component="a"
              sx={{ color: "#172a48", "&:hover": { bgcolor: "#f5f5f5" } }}
            >
              xxlaimxx1999@gmail.com
            </Button>
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            gap: "8px",
            marginTop: "8px",
          }}
        >
          <Button
            component="a"
            fullWidth
            sx={{
              color: "#172a48",
              bgcolor: "#f5f5f5",
              padding: "24px",
              borderRadius: "8px",
              textTransform: "None",
              flexWrap: "wrap",
              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
                bgcolor: "#f5f5f5",
              },
            }}
            target="_blank"
            href="https://t.me/paritet52"
            startIcon={<Telegram />}
          >
            <Typography variant="h6">Telegram</Typography>
          </Button>
          <Button
            fullWidth
            component="a"
            sx={{
              color: "#172a48",
              bgcolor: "#f5f5f5",
              padding: "24px",
              borderRadius: "8px",
              textTransform: "None",
              flexWrap: "wrap",
              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
                bgcolor: "#f5f5f5",
              },
            }}
            target="_blank"
            href="https://wa.me/+79200088057"
            startIcon={<WhatsApp />}
          >
            <Typography variant="h6">WhatsApp</Typography>
          </Button>
          <Button
            fullWidth
            component="a"
            sx={{
              color: "#172a48",
              bgcolor: "#f5f5f5",
              padding: "24px",
              borderRadius: "8px",
              textTransform: "None",
              flexWrap: "wrap",
              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
                bgcolor: "#f5f5f5",
              },
            }}
            href="mailto:xxlaimxx1999@gmail.com"
            startIcon={<PermPhoneMsg />}
          >
            <Typography variant="h6">Viber</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
