import { Button, ButtonOwnProps, Grid } from "@mui/material";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const CartTotalItem: React.FC = () => {
  const { getTotalAmount } = useContext(ShoppingCartContext);

  let amount = getTotalAmount() || 0;

  return (
    <>
      <Grid container columns={{ xs: 12 }}>
        <Grid item xs={12}>
          Total : {amount}
        </Grid>
      </Grid>
    </>
  );
};

export default CartTotalItem;
