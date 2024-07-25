import React, { useContext } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {
  ShoppingCartContext,
  useShoppingContext,
} from "../context/ShoppingCartContext";
import { Grid, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import ItemAmount from "./ItemAmount";
import { ProductProps } from "../types/Product";
import { getAmount } from "../utils/utils";

export interface CartIemProps {
  item: ProductProps;
}

const CartItem: React.FC<CartIemProps> = (props: CartIemProps) => {
  const { item } = { ...props };
  const {
    getItemAmount,
    removeFromCart,
    decreaseItemAmount,
    increaseItemAmount,
  } = useContext(ShoppingCartContext);
  let amount = getItemAmount(item.id);
  let totalAmount = amount * item.price;
  return (
    <>
      <Grid item xs={6} sx={{ pl: 2 }}>
        <Grid container columns={{ xs: 12 }}>
          <Grid item xs={7}>
            <img
              src={item.imgUrl}
              style={{ height: "100px", width: "125px", objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={5} sx={{ textAlign: "left" }}>
            <Typography variant="h5" component="h5">
              {item.name}
            </Typography>

            <ItemAmount
              amount={getAmount(item.amount)}
              increase={() => increaseItemAmount(item)}
              decrease={() => decreaseItemAmount(item)}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={6} sx={{ pr: 2, textAlign: "right" }}>
        {totalAmount + " " + item.currency}
        <CustomButton
          color="primary"
          variant="outlined"
          onClick={() => removeFromCart(item)}
        >
          <ClearIcon />
        </CustomButton>
      </Grid>
    </>
  );
};

//sx={{ display: "flex", justifyContent: "center" }}
export default CartItem;
