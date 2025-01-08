import { Box, Typography, IconButton, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description"; // For Resume Icon

const Contact = () => {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 3,
        px: 2,
        mt: 4,
        backgroundColor: "background.paper",
        textAlign: "center",
      }}
    >
      <Typography variant="body1" sx={{ mb: 2 }}>
        Connect with me:
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {/* LinkedIn Icon */}
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/panchajanyamysarla/"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <LinkedInIcon />
        </IconButton>

        {/* GitHub Icon */}
        <IconButton
          component={Link}
          href="https://github.com/panchajanyamysarla"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <GitHubIcon />
        </IconButton>

        {/* Resume Icon */}
        <IconButton
          component={Link}
          href="https://your-resume-url.com"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <DescriptionIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Panchajanya Mysarla. Built with React. All
        rights reserved.
      </Typography>
    </Box>
  );
};

export default Contact;
