"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { keyframes } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const slideFromRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const floatGently = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
  100% { transform: translateY(0px) rotate(360deg); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 20px rgba(255, 120, 213, 0.4); }
  50% { box-shadow: 0 0 40px rgba(255, 120, 213, 0.8), 0 0 60px rgba(255, 120, 213, 0.4); }
  100% { box-shadow: 0 0 20px rgba(255, 120, 213, 0.4); }
`;

const spinConic = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const morphingBlob = keyframes`
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

const hueShift = keyframes`
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
`;

export default function Hero() {
  return (
    <Box id="home" sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 50%, #f0f7ff 100%)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
    }}>
      {/* Enhanced Background Elements */}
      <Box sx={{ position: "absolute", inset: 0, opacity: 0.6 }}>
        {/* Floating geometric shapes */}
        <Box sx={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: 120,
          height: 120,
          background: "linear-gradient(135deg, #ff78d5, #7a8cff)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          animation: `${morphingBlob} 8s ease-in-out infinite`,
          filter: "blur(1px)",
        }} />
        
        <Box sx={{
          position: "absolute",
          top: "25%",
          right: "15%",
          width: 80,
          height: 80,
          background: "linear-gradient(135deg, #0acf83, #00d4aa)",
          borderRadius: "50%",
          animation: `${floatGently} 12s ease-in-out infinite`,
          filter: "blur(1px)",
        }} />
        
        <Box sx={{
          position: "absolute",
          bottom: "20%",
          left: "20%",
          width: 100,
          height: 100,
          background: "linear-gradient(135deg, #ff6b6b, #ffa726)",
          borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%",
          animation: `${morphingBlob} 10s ease-in-out infinite reverse`,
          filter: "blur(1px)",
        }} />
        
        {/* Animated grid pattern */}
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(28, 75, 224, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28, 75, 224, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: `${hueShift} 20s linear infinite`,
        }} />
      </Box>

      <Box sx={{ 
        maxWidth: 1200, 
        mx: "auto", 
        px: 3, 
        py: { xs: 8, md: 12 },
        position: "relative",
        zIndex: 2,
        width: "100%",
      }}>
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 8 },
          alignItems: "center",
        }}>
          {/* Content Section */}
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            {/* Greeting */}
            <Typography sx={{
              fontSize: { xs: 16, md: 18 },
              color: "#1c4be0",
              fontWeight: 600,
              mb: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              animation: `${fadeInUp} 800ms ease-out both`,
            }}>
              Hello guys 👋
            </Typography>

            {/* Main Name */}
            <Typography component="h1" sx={{
              fontSize: { xs: 32, md: 48, lg: 56 },
              fontWeight: 800,
              mb: 2,
              background: "linear-gradient(135deg, #1c4be0 0%, #2a6cff 50%, #7a8cff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: `${slideFromRight} 1000ms ease-out both`,
              lineHeight: 1.1,
            }}>
              I'm Dharanisri Raman
            </Typography>

            {/* Title */}
            <Typography sx={{
              fontSize: { xs: 20, md: 24, lg: 28 },
              fontWeight: 700,
              mb: 3,
              color: "#1d2a42",
              animation: `${fadeInUp} 800ms ease-out both`,
              animationDelay: "300ms",
            }}>
              <span style={{ 
                background: "linear-gradient(135deg, #ff78d5, #ff4eb8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>UI/UX Designer</span>
            </Typography>

            {/* Subtitle */}
            <Typography sx={{
              fontSize: { xs: 16, md: 18 },
              color: "#2f3d4f",
              opacity: 0.8,
              mb: 4,
              maxWidth: 500,
              lineHeight: 1.6,
              animation: `${fadeInUp} 800ms ease-out both`,
              animationDelay: "500ms",
            }}>
              Your next UI/UX Project Designer
            </Typography>

            {/* Action Buttons */}
            <Box sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
              animation: `${fadeInUp} 800ms ease-out both`,
              animationDelay: "600ms",
            }}>
              <Button
                component="a"
                href="#about"
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(135deg, #ff78d5, #ff4eb8)",
                  borderRadius: 3,
                  py: 1.5,
                  px: 4,
                  fontWeight: 700,
                  fontSize: 16,
                  textTransform: "none",
                  boxShadow: "0 8px 24px rgba(255, 120, 213, 0.4)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "linear-gradient(135deg, #ff4eb8, #ff2d9e)",
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 32px rgba(255, 120, 213, 0.5)",
                  },
                }}
              >
                About Me
              </Button>
             
                  
            </Box>

            {/* Social Icons */}
            <Box sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              animation: `${fadeInUp} 800ms ease-out both`,
              animationDelay: "700ms",
            }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/dharanisri-r035"
                target="_blank"
                rel="noopener"
                sx={{
                  background: "linear-gradient(135deg, #0077b5, #00a0dc)",
                  color: "#ffffff",
                  width: 56,
                  height: 56,
                  "&:hover": {
                    background: "linear-gradient(135deg, #005885, #0077b5)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 24px rgba(0, 119, 181, 0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.figma.com/"
                target="_blank"
                rel="noopener"
                sx={{
                  background: "linear-gradient(135deg, #f24e1e, #ff7262)",
                  color: "#ffffff",
                  width: 56,
                  height: 56,
                  "&:hover": {
                    background: "linear-gradient(135deg, #d13d1a, #f24e1e)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 24px rgba(242, 78, 30, 0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <Box component="span" sx={{ fontSize: 20, fontWeight: 700 }}>F</Box>
              </IconButton>


              <IconButton
                component="a"
                href="mailto:dharanisri1642004@gmail.com"
                sx={{
                  background: "linear-gradient(135deg, #ea4335, #ff6b6b)",
                  color: "#ffffff",
                  width: 56,
                  height: 56,
                  "&:hover": {
                    background: "linear-gradient(135deg, #d33426, #ea4335)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 24px rgba(234, 67, 53, 0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <EmailRoundedIcon />
              </IconButton>
            </Box>

            {/* Decorative dots */}
            <Box sx={{
              display: "flex",
              gap: 1,
              animation: `${fadeInUp} 800ms ease-out both`,
              animationDelay: "900ms",
            }}>
              {["#ff9f43", "#ff6b6b", "#a29bfe", "#00d2d3"].map((color, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: color,
                    animation: `${floatGently} ${3 + index}s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`,
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Avatar Section */}
          <Box sx={{ 
            order: { xs: 1, md: 2 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}>
            {/* Pulsing glow effect */}
            <Box sx={{
              position: "absolute",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255, 120, 213, 0.2), transparent)",
              animation: `${pulseGlow} 3s ease-in-out infinite`,
              zIndex: 1,
            }} />

            {/* Rotating conic ring */}
            <Box sx={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "conic-gradient(from 0deg, #ff78d5, #7a8cff, #0acf83, #ff78d5)",
              animation: `${spinConic} 8s linear infinite`,
              zIndex: 2,
            }} />

            {/* Avatar container */}
            <Box sx={{
              position: "relative",
              zIndex: 3,
              width: 280,
              height: 280,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #ffffff",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              background: "linear-gradient(135deg, #f8faff, #e8f2ff)",
            }}>
              <Box
                component="img"
                src="/dharanisri.jpg"
                alt="Dharanisri Raman"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>

            {/* Orbiting accent dots */}
            <Box sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 400,
              height: 400,
              transform: "translate(-50%, -50%)",
              zIndex: 0,
            }}>
              {[0, 90, 180, 270].map((angle, index) => (
                <Box
                  key={angle}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: ["#ff78d5", "#7a8cff", "#0acf83", "#ff6b6b"][index],
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-200px)`,
                    animation: `${spinConic} ${6 + index}s linear infinite`,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


