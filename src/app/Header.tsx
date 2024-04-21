"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Container } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { title: "О компании", link: "about" },
  { title: "Цены", link: "price" },
  { title: "Контакты", link: "contacts" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Paritet
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={`#${item.link}`}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box display="flex">
      <CssBaseline />

      <AppBar
        component="nav"
        sx={{
          padding: "0 16px",
        }}
      >
        <Container
          sx={{
            display: { xs: "block", sm: "flex" },
            flexDirection: "row",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Image
                width="64"
                height="64"
                src="/images/mixer.png"
                alt="mixer"
              />
              <Typography variant="h6" component="div">
                Paritet
              </Typography>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              gap: "8px",
              flexDirection: "row",
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <Image width="64" height="64" src="/images/mixer.png" alt="mixer" />
            <Typography variant="h6" component="div">
              Paritet
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.link}
                sx={{ color: "#fff" }}
                href={`#${item.link}`}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
