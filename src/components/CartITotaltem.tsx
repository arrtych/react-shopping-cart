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
    <div>
      {/* <hr style={{ borderTop: 0 }} /> */}
      <Grid
        container
        columns={{ xs: 12 }}
        // sx={{ pr: 2, pt: 2 }}
        className="teeest"
      >
        <Grid item xs={12} className="cart-total">
          <Grid item xs={12}>
            <p className="left">Total :</p>
          </Grid>
          <Grid item xs={12}>
            <p className="right">
              {defaultCurrency}
              {round(amount)}
            </p>
          </Grid>
          {/* <Typography variant="h4" component="h4"></Typography> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default CartTotalItem;
