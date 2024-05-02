import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/utils";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  let navItems = ["home", "store", "about"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const isHome = (item: string) => {
    return item == "home";
  };

  return (
    <AppBar position="fixed" className={styles.AppBar}>
      <Toolbar>
        {navItems.map((item, index) => (
          <Typography
            variant="h6"
            component={Link}
            key={index}
            to={isHome(item) ? "/" : "/" + item}
            style={{
              textDecoration: "none",
              marginRight: "20px",
            }}
            className={
              selectedIndex == index || (isHome(item) && selectedIndex == -1)
                ? styles.Active
                : styles.NotActive
            }
            onClick={() => setSelectedIndex(index)}
          >
            {capitalizeFirstLetter(item)}
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
