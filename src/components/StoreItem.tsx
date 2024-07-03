import { Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import ItemAmount from "./ItemAmount";
import { ProductProps } from "../types/Product";

//todo: useMediaQuery for card swhong on mobile by one card
// local
const StoreItem: React.FC<ProductProps> = (props: ProductProps) => {
  const { currency, id, name, price, imgUrl } = {
    currency: "$",
    ...props,
  };
  const {
    addToCart,
    removeFromCart,
    increaseItemAmount,
    getItemAmount,
    decreaseItemAmount,
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
              <ItemAmount
                amount={amount}
                increase={() => increaseItemAmount(props)}
                decrease={() => decreaseItemAmount(props)}
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
