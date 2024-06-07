import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        bgcolor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Typography variant="h6" gutterBottom></Typography>
      <Typography variant="body2">
        © 2024 | Developed by Javier Giberg & Yarin Akerman. | Dr. Shira Zucker
        |
      </Typography>
    </Box>
  );
}

export default Footer;
