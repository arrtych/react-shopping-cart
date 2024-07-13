import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import ItemAmount from "./ItemAmount";
import { ProductProps } from "../types/Product";
import { defaultCurrency } from "../utils/constants";

//todo: useMediaQuery for card swhong on mobile by one card
// local
const StoreItem: React.FC<ProductProps> = (props: ProductProps) => {
  const { currency, id, name, price, imgUrl } = {
    currency: defaultCurrency,
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
    <Box sx={{ boxShadow: 1 }}>
      <Grid
        container
        spacing={4}
        columns={{ xs: 12 }}
        className="storeItem"
        sx={{ mb: 3, borderRadius: "1rem" }}
      >
        <Grid item xs={12}>
          <img
            src={imgUrl}
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} columns={{ xs: 12 }}>
            <Grid item xs={6}>
              <Typography variant="h5" gutterBottom sx={{ ml: 3 }}>
                {name}
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="h5" sx={{ mr: 3, color: "#7b7b7b" }}>
                {currency}
                {price}
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
            mb: 2,
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
    </Box>
  );
};

export default StoreItem;
