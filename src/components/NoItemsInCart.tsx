import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Grid, Typography } from "@mui/material";
import "animate.css";

const NoItemsInCart: React.FC = () => {
  return (
    <>
      <Grid
        container
        columns={{ xs: 12 }}
        sx={{
          justifyContent: "center",
          textAlign: "center",
          color: "#8b8b8b",
          alignItems: "center",
          margin: 0,
          position: "absolute",
          top: "50%",
        }}
      >
        <Grid item xs={12}>
          <AddShoppingCartIcon
            sx={{ fontSize: "3rem", height: "2em", width: "2em" }}
            className="no-search-text animate__animated animate__zoomIn"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ fontSize: "1.75rem" }}
            className="no-search-text animate__animated animate__zoomIn"
          >
            No items in cart at the momemt
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default NoItemsInCart;
