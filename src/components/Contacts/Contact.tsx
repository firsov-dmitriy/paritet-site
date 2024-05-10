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

import { ContactButton } from "@/components/ui/ContactButton";

function Contact() {
  const buttons = [
    {
      href: "tel:79200088057",
      title: { text: <>Позвоните нам &mdash;</>, to: "+7 (920) 008-80-57" },
      icon: <PhoneInTalkRounded />,
    },
    {
      href: "mailto:paritet-152@yandex.ru",
      title: { text: <>Напишите нам &mdash;</>, to: "paritet-152@yandex.ru" },
      icon: <MailLockOutlined />,
    },
    {
      isSimple: true,
      target: "_blank",
      href: "https://t.me/paritet52",
      icon: <Telegram />,
      title: { text: "Telegram" },
    },
    {
      target: "_blank",
      isSimple: true,
      href: "https://wa.me/+79200088057",
      icon: <WhatsApp />,
      title: { text: "WhatsApp" },
    },
    {
      target: "_blank",
      isSimple: true,
      href: "viber://chat?number=2B79200088057",
      icon: <PermPhoneMsg />,
      title: { text: "Viber" },
    },
  ];
  return (
    <Box mt={4} id="contacts">
      <Typography variant="h3" align="center">
        Связаться с нами
      </Typography>

      <Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {buttons.map((item) => {
            if (item.isSimple) {
              return (
                <ContactButton
                  buttonProps={{
                    href: item.href,
                    startIcon: item.icon,
                    // @ts-expect-error
                    _target: item.target,
                  }}
                >
                  {item.title.text}
                </ContactButton>
              );
            }

            return (
              <ContactButton buttonProps={{ href: item.href }}>
                <Box
                  justifyContent="space-between"
                  alignItems="center"
                  gap={1}
                  sx={{
                    display: { xs: "grid", md: "flex" },
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" color="#172a48">
                    {item.title.text}
                  </Typography>
                  <Box
                    sx={{
                      display: { xs: "flex" },
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {item.icon}
                    <Typography variant="h6" color="#172a48">
                      {item.title.to}
                    </Typography>
                  </Box>
                </Box>
              </ContactButton>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
