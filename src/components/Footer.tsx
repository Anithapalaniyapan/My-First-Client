"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { keyframes } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const floatGently = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 20px rgba(0, 188, 212, 0.3); }
  50% { box-shadow: 0 0 30px rgba(0, 188, 212, 0.6); }
  100% { box-shadow: 0 0 20px rgba(0, 188, 212, 0.3); }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{
      background: "#f8f9fa",
      color: "#333",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top Section */}
      <Box sx={{ 
        maxWidth: 1200, 
        mx: "auto", 
        px: 3, 
        py: { xs: 4, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: 3, md: 0 },
        animation: `${fadeInUp} 800ms ease-out both`,
      }}>
        {/* Name/Brand */}
        <Typography variant="h6" sx={{ 
          fontWeight: 700, 
          fontSize: { xs: 20, md: 22 },
          color: "#00bcd4",
        }}>
          Dharanisri Raman
        </Typography>

        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton 
            component={Link} 
            href="https://www.linkedin.com/in/dharanisri-r035"
            target="_blank" 
            rel="noopener"
            sx={{ 
              color: "#00bcd4", 
              "&:hover": { 
                color: "#008ba3",
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <LinkedInIcon />
          </IconButton>
          
          <IconButton 
            component={Link} 
            href="mailto:dharanisri1642004@gmail.com"
            sx={{ 
              color: "#00bcd4", 
              "&:hover": { 
                color: "#008ba3",
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s ease",
            }}
          >
            <EmailRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Separator Line */}
      <Box sx={{ 
        borderTop: "1px solid #e9ecef", 
        mx: 3,
      }} />

      {/* Bottom Section */}
      <Box sx={{ 
        maxWidth: 1200, 
        mx: "auto", 
        px: 3, 
        py: { xs: 3, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: 2, md: 0 },
        animation: `${fadeInUp} 800ms ease-out both`,
        animationDelay: "200ms",
      }}>
        {/* Copyright */}
        <Typography sx={{ 
          fontSize: 14, 
          color: "#6c757d",
        }}>
          © {currentYear} Dharanisri Raman. All rights reserved.
        </Typography>

        {/* Development Credit */}
        <Typography sx={{ 
          fontSize: 14, 
          color: "#6c757d",
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}>
          Made with <span style={{ color: "#e91e63" }}>💙</span> using Next.js and Material UI
        </Typography>
      </Box>
    </Box>
  );
}
