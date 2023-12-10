import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import DrawerComponent from "./DrawerComponent";

import Crypto from "../assets/crypto.svg";
import { useState } from "react";

const RoutesStyles = {
  mr: 2,
  display: { xs: "none", sm: "flex" },
  fontWeight: 500,
  color: "#2ccccc",
  textDecoration: "none",
  "&:hover": {
    color: "#51ff00",
    textDecoration: "underline",
  },
};

export default function Navbar() {
  const [show, setShow] = useState({
    right: false,
  });

  const anchor = "right";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShow({ ...show, [anchor]: open });
  };

  return (
    <AppBar sx={{ backgroundColor: "#2c2c6c", position: "sticky" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <Avatar src={Crypto} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuIcon sx={{ color: "#2ccccc" }} />
            </IconButton>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex="1"
          >
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={RoutesStyles}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/coins"
              sx={RoutesStyles}
            >
              Coins
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/news"
              sx={RoutesStyles}
            >
              News
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/market"
              sx={RoutesStyles}
            >
              Coin Markets
            </Typography>
          </Box>
        </Toolbar>
      </Container>
      <DrawerComponent
        show={show}
        setShow={setShow}
        toggleDrawer={toggleDrawer}
        anchor={anchor}
      />
    </AppBar>
  );
}
