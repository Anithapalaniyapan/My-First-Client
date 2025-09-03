"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { keyframes } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const floatGently = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;


const morphingBlob = keyframes`
  0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 188, 212, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(0, 188, 212, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 188, 212, 0); }
`;

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "dharanisri1642004@gmail.com",
    color: "#00bcd4",
    description: "Send me an email anytime",
    gradient: "linear-gradient(135deg, #00bcd4, #00acc1)",
    link: "mailto:dharanisri1642004@gmail.com"
  },
  {
    icon: <LocationOnIcon />,
    label: "Location",
    value: "Namakkal, Tamil Nadu, India",
    color: "#00bcd4",
    gradient: "linear-gradient(135deg, #7a8cff, #5a6cff)",
    link: undefined
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "👈 Click the Button 😸 ",
    color: "#00bcd4",
    description: "Connect with me professionally",
    gradient: "linear-gradient(135deg, #0acf83, #00d4aa)",
    link: "https://www.linkedin.com/in/dharanisri-r035"
  }
];

export default function ContactSection() {
  return (
    <Box id="contact" sx={{
      background: "linear-gradient(135deg, #f8faff 0%, #e8f2ff 50%, #f0f7ff 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Enhanced Background Elements */}
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05 }}>
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
            linear-gradient(rgba(0, 188, 212, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 188, 212, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }} />
      </Box>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3, py: { xs: 6, md: 8 }, position: "relative", zIndex: 1 }}>
        {/* Enhanced Header Section */}
        <Box sx={{ 
          textAlign: "center", 
          mb: { xs: 5, md: 6 },
          position: "relative",
        }}>
          <Typography component="h2" sx={{
            fontSize: { xs: 32, md: 40, lg: 48 },
            color: "#1c4be0",
            fontWeight: 800,
            mb: 3,
            background: "linear-gradient(135deg, #1c4be0 0%, #2a6cff 50%, #7a8cff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: `${fadeInUp} 800ms ease-out both`,
            lineHeight: 1.1,
          }}>
            Contact Me
          </Typography>
          
          {/* Enhanced teal underline with gradient */}
          <Box sx={{
            width: 80,
            height: 4,
            background: "linear-gradient(90deg, #00bcd4, #00acc1, #00bcd4)",
            mx: "auto",
            borderRadius: 2,
            mb: 4,
            boxShadow: "0 4px 16px rgba(0, 188, 212, 0.4)",
            animation: `${fadeInUp} 800ms ease-out both`,
            animationDelay: "200ms",
          }} />
          
          {/* Enhanced "Get In Touch" section */}
          <Box sx={{
            maxWidth: 900,
            mx: "auto",
            textAlign: "left",
            background: "rgba(255,255,255,0.8)",
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.9)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: "linear-gradient(90deg, #00bcd4, #7a8cff, #00bcd4)",
              opacity: 0.8,
            }
          }}>
            <Typography component="h3" sx={{
              fontSize: { xs: 22, md: 26, lg: 28 },
              fontWeight: 700,
              color: "#1d2a42",
              mb: 3,
              animation: `${slideInLeft} 800ms ease-out both`,
              animationDelay: "400ms",
            }}>
              Get In Touch
            </Typography>
            
            <Typography sx={{
              fontSize: { xs: 15, md: 17 },
              color: "#2b3a51",
              opacity: 0.9,
              lineHeight: 1.7,
              animation: `${slideInRight} 800ms ease-out both`,
              animationDelay: "600ms",
            }}>
              Feel free to contact me for any questions or opportunities. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </Typography>
          </Box>
        </Box>

        {/* Enhanced Contact Information Cards */}
        <Box sx={{
          display: "grid",
          gap: { xs: 3, md: 4 },
          mb: 7,
          maxWidth: 800,
          mx: "auto",
          animation: `${fadeInUp} 800ms ease-out both`,
          animationDelay: "800ms",
        }}>
                           {contactInfo.map((info) => (
            <Box key={info.label} sx={{
              background: "rgba(255,255,255,0.95)",
              borderRadius: 4,
              p: { xs: 3, md: 4 },
              display: "flex",
              alignItems: "center",
              gap: { xs: 3, md: 4 },
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              border: "1px solid rgba(255,255,255,0.9)",
              transition: "all 0.4s ease",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                "& .icon-container": {
                  transform: "scale(1.1) rotate(5deg)",
                },
                "& .card-bg": {
                  opacity: 0.15,
                }
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: info.gradient,
                opacity: 0,
                transition: "opacity 0.3s ease",
              },
              "&:hover::before": {
                opacity: 1,
              }
            }}>
              {/* Enhanced Icon */}
              <Box
                component={info.link ? "a" : "div"}
                href={info.link}
                target={info.link?.startsWith("http") ? "_blank" : undefined}
                rel={info.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: info.gradient,
                  color: "white",
                  fontSize: 28,
                  cursor: info.link ? "pointer" : "default",
                  transition: "all 0.3s ease",
                  "&:hover": info.link ? {
                    transform: "scale(1.1) rotate(5deg)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  } : {},
                  animation: `${pulseGlow} 3s ease-in-out infinite`,
                }}
              >
                {info.icon}
              </Box>
              
              {/* Enhanced Content */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{
                  fontSize: { xs: 18, md: 20 },
                  fontWeight: 700,
                  color: "#1d2a42",
                  mb: 1,
                }}>
                  {info.label}
                </Typography>
                {info.link ? (
                  <Box
                    component="a"
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    sx={{
                      display: "block",
                      fontSize: { xs: 14, md: 16 },
                      color: info.label === "Email" || info.label === "LinkedIn" ? info.color : "#1d2a42",
                      fontWeight: 600,
                      mb: 1,
                      wordBreak: "break-word",
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        opacity: 0.8,
                        transform: "translateX(4px)",
                      },
                    }}
                  >
                    {info.value}
                  </Box>
                ) : (
                  <Typography sx={{
                    fontSize: { xs: 14, md: 16 },
                    color: info.label === "Email" || info.label === "LinkedIn" ? info.color : "#1d2a42",
                    fontWeight: 600,
                    mb: 1,
                    wordBreak: "break-word",
                  }}>
                    {info.value}
                  </Typography>
                )}
                <Typography sx={{
                  fontSize: { xs: 12, md: 14 },
                  color: "#6c757d",
                  opacity: 0.8,
                  fontStyle: "italic",
                }}>
                  {info.description}
                </Typography>
              </Box>

              {/* Hover Background Effect */}
              <Box className="card-bg" sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(135deg, ${info.color}08, transparent)`,
                opacity: 0,
                transition: "opacity 0.3s ease",
                zIndex: -1,
              }} />
            </Box>
          ))}
        </Box>

        {/* Enhanced Contact Form */}
        <Box sx={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: 6,
          p: { xs: 4, md: 5 },
          boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.9)",
          maxWidth: 800,
          mx: "auto",
          animation: `${fadeInUp} 800ms ease-out both`,
          animationDelay: "1000ms",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #00bcd4, #7a8cff, #0acf83, #00bcd4)",
            opacity: 0.8,
          }
        }}>
          <Typography component="h3" sx={{
            fontSize: { xs: 20, md: 24 },
            fontWeight: 700,
            color: "#1d2a42",
            mb: 4,
            textAlign: "center",
          }}>
            Send Me a Message
          </Typography>
          
          <Box component="form" sx={{ display: "grid", gap: 4 }}>
            <Box sx={{ display: "grid", gap: 4, gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00bcd4",
                      borderWidth: 2,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00bcd4",
                      borderWidth: 2,
                    },
                  },
                }}
              />
              <TextField
                label="Your Email"
                type="email"
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00bcd4",
                      borderWidth: 2,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#00bcd4",
                      borderWidth: 2,
                    },
                  },
                }}
              />
            </Box>
            
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00bcd4",
                    borderWidth: 2,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00bcd4",
                    borderWidth: 2,
                  },
                },
              }}
            />
            
            <TextField
              label="Message"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00bcd4",
                    borderWidth: 2,
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00bcd4",
                    borderWidth: 2,
                  },
                },
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(135deg, #00bcd4, #00acc1)",
                borderRadius: 3,
                py: 2,
                px: 6,
                fontWeight: 700,
                fontSize: 16,
                textTransform: "none",
                boxShadow: "0 8px 24px rgba(0, 188, 212, 0.35)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #00acc1, #0097a7)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 32px rgba(0, 188, 212, 0.45)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


