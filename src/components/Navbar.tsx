import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/utils";
import "../styles/Navbar.css";
import CustomShoppingCartIcon from "./CustomShoppingCartIcon";

interface NavbarProps {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const navItems = ["home", "store", "about"];
  const { onClick } = { ...props };
  const location = useLocation();

  const isHome = (item: string) => {
    return item === "home";
  };

  const isActive = (item: string) => {
    const currentPath = location.pathname;
    return isHome(item) ? currentPath === "/" : currentPath.includes(item);
  };

  const navItemStyle = (isActive: boolean) => ({
    color: isActive ? "black" : "gray",
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "20px",
  });

  return (
    <AppBar position="fixed" style={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {navItems.map((item, index) => (
            <Typography
              variant="h6"
              component={Link}
              key={index}
              to={isHome(item) ? "/" : `/${item}`}
              style={navItemStyle(isActive(item))}
              className="nav-item"
            >
              {capitalizeFirstLetter(item)}
            </Typography>
          ))}
        </Box>

        <Button
          variant="outlined"
          style={{
            minWidth: "44px",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
          }}
          onClick={onClick}
        >
          <CustomShoppingCartIcon isOpen={false} />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
