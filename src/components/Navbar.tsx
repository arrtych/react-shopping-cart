import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { capitalizeFirstLetter } from "../utils/utils";
import "../styles/Navbar.css";
import CustomShoppingCartIcon from "./CustomShoppingCartIcon";
import { Link, useLocation } from "react-router-dom";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import { useDrawer } from "../context/DrawerContext";

interface NavbarProps {
  isOpen?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const navItems = ["home", "store"];
  const { onClick } = { ...props };
  const location = useLocation();
  const { openDrawer, changeDrawer } = useDrawer();

  useEffect(() => {
    changeBodyClass();
  }, [location]);

  const isHome = (item: string) => {
    return item === "home";
  };

  const isActive = (item: string) => {
    const currentPath = location.pathname;
    return isHome(item) ? currentPath === "/" : currentPath.includes(item);
  };

  const changeBodyClass = (): void => {
    let className = location.pathname.substring(1);
    if (!className) {
      className = "home";
    }
    document.body.className = className;
  };

  const navItemStyle = (isActive: boolean) => ({
    color: isActive ? "#1976d2" : "gray",
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "20px",
  });

  return (
    <AppBar position="fixed" style={{ backgroundColor: "white" }}>
      <Toolbar>
        <Box
          component={"nav"}
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
              <div className="nav-icon-item">
                {isHome(item) ? (
                  <AddHomeOutlinedIcon />
                ) : (
                  <PaymentOutlinedIcon />
                )}
                <p>{capitalizeFirstLetter(item)}</p>
              </div>
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
          onClick={changeDrawer}
        >
          <CustomShoppingCartIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
