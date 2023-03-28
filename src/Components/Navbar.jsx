import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";

function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">React-Router v6.4 and above</Typography>
            <Box sx={{ display: "flex", gap: "50px", alignItems: "center" }}>
              <Typography>Home</Typography>
              <Typography>About</Typography>
              <Typography>Contact</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
