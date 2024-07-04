import { Button, ButtonOwnProps, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { defaultCurrency } from "../utils/constants";

const CartTotalItem: React.FC = () => {
  const { getTotalPrice } = useContext(ShoppingCartContext);

  let amount = getTotalPrice() || 0;

  return (
    <>
      <Grid container columns={{ xs: 12 }} sx={{ pr: 2 }}>
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Typography variant="h4" component="h4">
            Total : {defaultCurrency}
            {amount}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CartTotalItem;
