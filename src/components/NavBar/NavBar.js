import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <img
          src="./logo.png"
          width="50px"
          alt="none"
          style={{ marginRight: theme.spacing(2) }}
        />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          JOBMATCH
        </Typography>
        <div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component="a" href="/">
              Home
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component="a"
              href="/StudentRegister"
            >
              Student Register
            </MenuItem>
            <MenuItem onClick={handleClose} component="a" href="/Login-App">
              App Login
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
