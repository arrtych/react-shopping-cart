import { Button, ButtonOwnProps, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { defaultCurrency } from "../utils/constants";

const CartTotalItem: React.FC = () => {
  const { getTotalPrice } = useContext(ShoppingCartContext);

  let amount = getTotalPrice() || 0;

  return (
    <>
      <Grid container columns={{ xs: 12 }}>
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Typography variant="h2" component="h2">
            Total : {defaultCurrency}
            {amount}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CartTotalItem;
