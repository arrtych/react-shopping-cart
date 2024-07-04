import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Grid, Typography } from "@mui/material";

const NoItems: React.FC = () => {
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
        }}
      >
        <Grid item xs={12}>
          <Typography sx={{ fontSize: "1.75rem" }}>
            No items in cart at the momemt
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <AddShoppingCartIcon sx={{ fontSize: "3rem" }} />
        </Grid>
      </Grid>
    </>
  );
};

export default NoItems;
