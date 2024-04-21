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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: "4px",
              padding: "24px",
              borderRadius: "8px",
              bgcolor: "#CAD6B2",
              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="h6" color="#172a48">
              Позвоните нам &mdash;
            </Typography>
            <Button
              startIcon={<PhoneInTalkRounded />}
              component="a"
              sx={{ color: "#172a48", "&:hover": { bgcolor: "#CAD6B2" } }}
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
              padding: "24px",
              flexDirection: { xs: "column", md: "row" },
              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
              },
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
              sx={{ color: "#172a48", "&:hover": { bgcolor: "#CAD6B2" } }}
              href="mailto:xxlaimxx1999@gmail.com"
            >
              xxlaimxx1999@gmail.com
            </Button>
          </Box>
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
              bgcolor: "#CAD6B2",
              padding: "24px",
              borderRadius: "8px",
              textTransform: "None",

              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
                bgcolor: "#CAD6B2",
              },
            }}
            href="mailto:xxlaimxx1999@gmail.com"
            startIcon={<Telegram />}
          >
            <Typography variant="h6">Telegram</Typography>
          </Button>
          <Button
            fullWidth
            component="a"
            sx={{
              color: "#172a48",
              bgcolor: "#CAD6B2",
              padding: "24px",
              borderRadius: "8px",
              textTransform: "None",

              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
                bgcolor: "#CAD6B2",
              },
            }}
            href="mailto:xxlaimxx1999@gmail.com"
            startIcon={<WhatsApp />}
          >
            <Typography variant="h6">WhatsApp</Typography>
          </Button>
          <Button
            fullWidth
            component="a"
            sx={{
              color: "#172a48",
              bgcolor: "#CAD6B2",
              padding: "24px",
              borderRadius: "8px",
              textTransform: "None",
              "&:hover": {
                transform: "scale(1.02)",
                cursor: "pointer",
                bgcolor: "#CAD6B2",
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
