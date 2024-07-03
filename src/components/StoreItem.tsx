import { Button, Card, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import CustomButton from "./CustomButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCart from "./ShoppingCart";
import {
  ShoppingCartContext,
  useShoppingContext,
} from "../context/ShoppingCartContext";
import ItemAmount from "./ItemAmount";

export interface StoreItemProps {
  //@todo: rename
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  amount: number;
  currency?: string;
}

//todo: useMediaQuery for card swhong on mobile by one card
// local
const StoreItem: React.FC<StoreItemProps> = (props: StoreItemProps) => {
  const { currency, id, name, price, imgUrl } = {
    currency: "$",
    ...props,
  };
  const {
    addToCart,
    removeFromCart,
    increaseItemAmount,
    getItemAmount,
    decreaseCartAmount,
  } = useContext(ShoppingCartContext);

  let amount = getItemAmount(id);
  const isInCart = !!amount;
  return (
    <>
      <Grid container spacing={4} columns={{ xs: 12 }}>
        <Grid item xs={12}>
          <img
            src={imgUrl}
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} columns={{ xs: 12 }}>
            <Grid item xs={6}>
              <Typography variant="h3" gutterBottom>
                {name}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              {/* marginRight: "15px" */}
              <Typography variant="h4" component="span">
                {price} {currency}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isInCart ? (
            <>
              {/* <CustomButton
                color="primary"
                variant="outlined"
                onClick={() => decreaseCartAmount(props)}
              >
                <RemoveIcon />
              </CustomButton>
              <Typography
                sx={{
                  padding: "0 1.25rem",
                }}
              >
                {amount}
              </Typography>
              <CustomButton
                color="primary"
                onClick={() => increaseItemAmount(props)}
              >
                <AddIcon />
              </CustomButton> */}
              <ItemAmount
                amount={amount}
                increase={() => decreaseCartAmount(props)}
                decrease={() => increaseItemAmount(props)}
              />

              <CustomButton
                sx={{
                  marginLeft: "1rem",
                }}
                color="error"
                onClick={() => removeFromCart(props)}
              >
                Remove
              </CustomButton>
            </>
          ) : (
            <CustomButton color="primary" onClick={() => addToCart(props)}>
              Add to cart
            </CustomButton>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default StoreItem;
