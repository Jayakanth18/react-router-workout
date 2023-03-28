import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">React-Router v6.4 and above</Typography>
            <Box sx={{ display: "flex", gap: "50px", alignItems: "center" }}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="contact">Contact</NavLink>
              <NavLink to='careers'>Careers</NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
