"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const serviceData = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.",
    icon: "🎨",
    color: "#ff7262"
  },
  {
    title: "Web Design",
    description: "Creating beautiful and responsive web designs that provide exceptional user experiences across all devices.",
    icon: "💻",
    color: "#a259ff"
  },
  {
    title: "Mobile App Design",
    description: "Designing mobile-first experiences that work seamlessly across different devices and platforms.",
    icon: "📱",
    color: "#1abcfe"
  }
];

export default function ServiceSection() {
  return (
    <Box id="services" sx={{
      background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decorative elements */}
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.03 }}>
        <Box sx={{ position: "absolute", top: "15%", right: "15%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, #ff7262, transparent)", animation: `${floatGently} 15s ease-in-out infinite` }} />
        <Box sx={{ position: "absolute", bottom: "20%", left: "10%", width: 150, height: 150, borderRadius: "50%", background: "radial-gradient(circle, #a259ff, transparent)", animation: `${floatGently} 10s ease-in-out infinite` }} />
        <Box sx={{ position: "absolute", top: "50%", left: "50%", width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle, #1abcfe, transparent)", animation: `${floatGently} 8s ease-in-out infinite` }} />
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
            Services
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
            Comprehensive design and development solutions tailored to your needs
          </Typography>
        </Box>

        <Box sx={{ 
          display: "grid", 
          gap: { xs: 3, md: 4 }, 
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          animation: `${fadeInUp} 800ms ease-out both`,
          animationDelay: "400ms",
        }}>
          {serviceData.map((service, index) => (
            <Card key={`${service.title}-${index}`} sx={{
              background: "rgba(255,255,255,0.9)",
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
                "& .service-icon": {
                  animation: `${pulse} 1s ease-in-out infinite`,
                }
              }
            }}>
              {/* Service Icon */}
              <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 80,
                background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`,
                position: "relative",
              }}>
                <Typography 
                  className="service-icon"
                  sx={{ 
                    fontSize: 40,
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                  }}
                >
                  {service.icon}
                </Typography>
                {/* Decorative circle */}
                <Box sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                  zIndex: -1,
                }} />
              </Box>

              <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
                <Typography component="h3" sx={{
                  fontSize: { xs: 18, md: 20 },
                  fontWeight: 700,
                  color: "#1d2a42",
                  mb: 2,
                  textAlign: "center",
                }}>
                  {service.title}
                </Typography>
                
                <Typography sx={{
                  fontSize: 14,
                  color: "#2f3d4f",
                  opacity: 0.8,
                  lineHeight: 1.6,
                  textAlign: "center",
                }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Call to Action */}
        <Box sx={{ 
          textAlign: "center", 
          mt: { xs: 6, md: 8 },
          animation: `${fadeInUp} 800ms ease-out both`,
          animationDelay: "600ms",
        }}>
          <Typography sx={{
            fontSize: { xs: 18, md: 20 },
            color: "#2f3d4f",
            mb: 3,
            fontWeight: 500,
          }}>
            Ready to bring your ideas to life?
          </Typography>
          <Box sx={{
            display: "inline-block",
            px: 4,
            py: 2,
            borderRadius: 3,
            background: "linear-gradient(135deg, #1c4be0, #2a6cff)",
            color: "white",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(28, 75, 224, 0.3)",
            }
          }}>
            Get Started Today
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
