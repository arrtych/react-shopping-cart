import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/utils";
import { useState } from "react";
import "../styles/Navbar.css";
import CustomShoppingCartIcon from "./CustomShoppingCartIcon";

const Navbar: React.FC = () => {
  let navItems = ["home", "store", "about"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const isHome = (item: string) => {
    return item == "home";
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "white" }}>
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
              to={isHome(item) ? "/" : "/" + item}
              style={
                selectedIndex == index || (isHome(item) && selectedIndex == -1)
                  ? { color: "black", fontWeight: "bold", marginRight: "20px" }
                  : { color: "gray", marginRight: "20px" }
              }
              className="nav-item"
              // style={{
              //   textDecoration: "none",
              //   marginRight: "20px",
              // }}
              // className={
              //   selectedIndex == index || (isHome(item) && selectedIndex == -1)
              //     ? "Active"
              //     : "NotActive"
              // }
              onClick={() => setSelectedIndex(index)}
            >
              {capitalizeFirstLetter(item)}
            </Typography>
          ))}
        </Box>

        <Button
          variant="outlined"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        >
          <CustomShoppingCartIcon amount={4} />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
