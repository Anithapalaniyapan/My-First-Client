"use client";

import Link from "next/link";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          background: "rgba(14,13,13,0.7)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%", px: { xs: 1.5, md: 3 }, gap: { md: 3 }, position: 'relative' }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <Box sx={{ width: 10, height: 10, borderRadius: 10, background: "linear-gradient(135deg,#ff7bd3,#7b95ff)" }} />
            <Typography variant="h6" sx={{ fontWeight: 800 }}>Dharanisri<Typography component="span" sx={{ color: "#ff4eb8", fontWeight: 800 }}>.</Typography></Typography>
          </Link>

          {/* Centered desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ textDecoration: 'none', color: 'inherit', opacity: 0.9 }}>{l.label}</Link>
            ))}
          </Box>

          {/* Right side: contact always; menu only on mobile */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginLeft: 'auto' }}>
            <Link href="#contact" style={{ textDecoration: 'none' }}>
              <Chip label="Contact" sx={{
                px: 1.5,
                py: 0.5,
                color: "#fff",
                background: "linear-gradient(135deg,#ff78d5,#7a8cff)",
              }} />
            </Link>
            <IconButton color="inherit" onClick={() => setOpen(true)} aria-label="Open menu" sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            top: 64,
            height: "calc(100vh - 64px)",
            background: "rgba(18,20,26,0.88)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          },
        }}
      >
        <List sx={{ maxWidth: 1200, mx: "auto", width: "100%", py: 2 }}>
          {[...navLinks, { label: "Contact", href: "#contact" }].map((l) => (
            <ListItem key={l.href} disablePadding>
              <Link href={l.href} style={{ width: "100%", textDecoration: "none" }} onClick={() => setOpen(false)}>
                <ListItemButton sx={{
                  my: 0.5,
                  mx: 1,
                  borderRadius: 1.5,
                  bgcolor: "rgba(65,78,115,0.55)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#f5f8ff",
                }}>
                  <ListItemText primary={l.label} primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box sx={{ height: 64 }} />
    </>
  );
}


