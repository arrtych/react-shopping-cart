import { Button, ButtonOwnProps, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { defaultCurrency } from "../utils/constants";
import { round } from "../utils/utils";
import "../styles/CartTotalItem.css";

const CartTotalItem: React.FC = () => {
  const { getTotalPrice } = useContext(ShoppingCartContext);

  let amount = getTotalPrice() || 0;

  return (
    <>
      <Grid
        container
        columns={{ xs: 12 }}
        // sx={{ pr: 2, pt: 2 }}
        className="cart-total"
      >
        <Grid item xs={6}>
          <Typography variant="h5" component="h5" className="left">
            Total
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" component="h5" className="right">
            {defaultCurrency}
            {round(amount)}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CartTotalItem;
