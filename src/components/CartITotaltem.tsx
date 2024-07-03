import { Button, ButtonOwnProps, Grid } from "@mui/material";
import React, { useContext } from "react";
import { JsxElement } from "typescript";
import { OverridableStringUnion } from "@mui/types";
import {
  ShoppingCartContext,
  useShoppingContext,
} from "../context/ShoppingCartContext";
import { StoreItemProps } from "./StoreItem";

export interface ShoppingCartProps {
  // item: StoreItemProps;
}

const CartTotalItem: React.FC<ShoppingCartProps> = (
  props: ShoppingCartProps
) => {
  const { getTotalAmount } = useContext(ShoppingCartContext);

  let amount = getTotalAmount() || 0;

  // function get
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
