"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { keyframes } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const floatGently = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const skills = [
  { name: "UI/UX Design", emoji: "🎨", color: "#ff78d5" },
  { name: "Prototyping", emoji: "📱", color: "#7a8cff" },
  { name: "User Research", emoji: "🔍", color: "#0acf83" },
  { name: "Wireframing", emoji: "✏️", color: "#ff6b6b" },
  { name: "Design Systems", emoji: "🎯", color: "#ffa726" },
  { name: "Usability Testing", emoji: "🧪", color: "#a29bfe" }
];

export default function AboutSection() {
  return (
    <Box id="about" sx={{
      background: "linear-gradient(135deg, #ffffff 0%, #f8faff 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decorative elements */}
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03 }}>
        <Box sx={{ position: "absolute", top: "20%", right: "10%", width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, #0acf83, transparent)", animation: `${floatGently} 12s ease-in-out infinite` }} />
        <Box sx={{ position: "absolute", bottom: "25%", left: "8%", width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, #ff78d5, transparent)", animation: `${floatGently} 8s ease-in-out infinite` }} />
      </Box>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3, py: { xs: 8, md: 12 }, position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography component="h2" sx={{
            fontSize: { xs: 36, md: 48 },
            color: "#1c4be0",
            fontWeight: 800,
            mb: 2,
            background: "linear-gradient(135deg, #1c4be0, #2a6cff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: `${fadeInUp} 800ms ease-out both`,
          }}>
            About
          </Typography>
          <Typography sx={{
            fontSize: { xs: 16, md: 18 },
            color: "#2f3d4f",
            opacity: 0.8,
            maxWidth: 800,
            mx: "auto",
            mb: 4,
            lineHeight: 1.6,
            animation: `${fadeInUp} 800ms ease-out both`,
            animationDelay: "200ms",
          }}>
            I&apos;m a passionate UI/UX designer with a keen eye for creating intuitive and engaging digital experiences. My approach combines creative design thinking with user-centered methodologies to deliver solutions that not only look great but also provide seamless user interactions.
          </Typography>

          {/* Download Resume Button */}
          <Box sx={{ animation: `${fadeInUp} 800ms ease-out both`, animationDelay: "400ms" }}>
            <Button
              component="a"
              href="/resume.pdf"
              download
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              sx={{
                background: "linear-gradient(135deg, #00bcd4, #00acc1)",
                borderRadius: 3,
                py: 1.5,
                px: 4,
                fontWeight: 700,
                fontSize: 16,
                textTransform: "none",
                boxShadow: "0 8px 24px rgba(0, 188, 212, 0.4)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #00acc1, #0097a7)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 32px rgba(0, 188, 212, 0.5)",
                },
              }}
            >
              Download Resume
            </Button>
          </Box>
        </Box>

        <Box sx={{ 
          display: "grid", 
          gap: { xs: 3, md: 4 }, 
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          animation: `${fadeInUp} 800ms ease-out both`,
          animationDelay: "600ms",
        }}>
                           {skills.map((skill) => (
            <Box key={skill.name} sx={{
              background: "rgba(255,255,255,0.8)",
              borderRadius: 3,
              p: 3,
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              }
            }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Box sx={{ 
                  width: 12, 
                  height: 12, 
                  borderRadius: "50%", 
                  background: skill.color,
                  flexShrink: 0,
                }} />
                <Typography sx={{
                  fontSize: { xs: 18, md: 20 },
                  fontWeight: 700,
                  color: "#1d2a42",
                }}>
                  {skill.name}
                </Typography>
              </Box>
              <Typography sx={{
                fontSize: 48,
                textAlign: "center",
                opacity: 0.8,
              }}>
                {skill.emoji}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}


