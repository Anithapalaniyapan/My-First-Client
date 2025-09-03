"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { keyframes } from "@mui/system";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const floatGently = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const projectData = [
  {
    title: "Food Delivery App",
    tag: "Mobile",
    description: "User-friendly food ordering experience with seamless navigation",
    image: "/project 1.jpg",
    color: "#ff7262"
  },
  {
    title: "Food Delivery App",
    tag: "Mobile",
    description: "User-friendly food ordering experience with seamless navigation",
    image: "/vercel.svg", // Replace with your project image
    color: "#a259ff"
  },
  {
    title: "Booking System",
    tag: "Product",
    description: "Streamlined appointment booking with calendar integration",
    image: "/vercel.svg", // Replace with your project image
    color: "#1abcfe"
  }
];

export default function ProjectsSection() {
  return (
    <Box id="projects" sx={{
      background: "#ffffff",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decorative elements */}
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.02 }}>
        <Box sx={{ position: "absolute", top: "20%", right: "10%", width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, #0acf83, transparent)", animation: `${floatGently} 12s ease-in-out infinite` }} />
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
            Projects
          </Typography>
          <Typography sx={{
            fontSize: { xs: 16, md: 18 },
            color: "#2f3d4f",
            opacity: 0.8,
            maxWidth: 600,
            mx: "auto",
            animation: `${fadeInUp} 800ms ease-out both`,
            animationDelay: "200ms",
          }}>
            Selected works crafted with usability and aesthetics in mind
          </Typography>
        </Box>

        <Box sx={{ 
          display: "grid", 
          gap: { xs: 3, md: 4 }, 
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          animation: `${fadeInUp} 800ms ease-out both`,
          animationDelay: "400ms",
        }}>
          {projectData.map((project, index) => (
            <Box key={`${project.title}-${index}`} sx={{
              background: "rgba(255,255,255,0.8)",
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
              }
            }}>
              {/* Project Image */}
              <Box sx={{
                height: { xs: 200, md: 220 },
                background: `linear-gradient(135deg, ${project.color}15, ${project.color}08)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
                <Box component="img" 
                  src={project.image}
                  alt={project.title}
                  sx={{ 
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }} 
                />
                {/* Hover overlay */}
                <Box sx={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": { opacity: 1 }
                }} />
              </Box>

              {/* Project Info */}
              <Box sx={{ p: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                  <Chip 
                    label={project.tag} 
                    size="small"
                    sx={{ 
                      background: `${project.color}15`, 
                      color: project.color, 
                      fontWeight: 600,
                      fontSize: "12px",
                    }} 
                  />
                </Box>
                <Typography component="h3" sx={{
                  fontSize: { xs: 18, md: 20 },
                  fontWeight: 700,
                  color: "#1d2a42",
                  mb: 1,
                }}>
                  {project.title}
                </Typography>
                <Typography sx={{
                  fontSize: 14,
                  color: "#2f3d4f",
                  opacity: 0.8,
                  lineHeight: 1.5,
                }}>
                  {project.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}


