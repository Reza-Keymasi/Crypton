import { Box, Drawer, Typography, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { Link } from "react-router-dom";

const items = [
  { id: 1, name: "Home", route: "/" },
  { id: 2, name: "Coins", route: "/coins" },
  { id: 3, name: "Exchanges", route: "/exchanges" },
  { id: 4, name: "Coin Markets", route: "/coinmarkets" },
];
const DrawerRoutesStyles = {
  m: 1.5,
  fontWeight: 500,
  color: "#2ccccc",
  textDecoration: "none",
  "&:hover": {
    color: "#51ff00",
    textDecoration: "underline",
  },
};

export default function DrawerComponent({ show, toggleDrawer, anchor }) {
  return (
    <>
      <Drawer
        anchor={anchor}
        open={show[anchor]}
        onClose={toggleDrawer(anchor, false)}
        sx={{ "& .MuiDrawer-paperAnchorRight": { backgroundColor: "#2c2c6c" } }}
      >
        <Box>
          <IconButton onClick={toggleDrawer(anchor, false)}>
            <ClearIcon sx={{ color: "#2ccccc" }} />
          </IconButton>
        </Box>
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              to={`${item.route}`}
              component={Link}
              sx={DrawerRoutesStyles}
              onClick={toggleDrawer(anchor, false)}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Drawer>
    </>
  );
}
