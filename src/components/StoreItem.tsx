import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import ItemAmount from "./ItemAmount";
import { ProductProps } from "../types/Product";
import { defaultCurrency } from "../utils/constants";
import DeleteIcon from "@mui/icons-material/DeleteOutline";

//todo: useMediaQuery for card swhong on mobile by one card
// local
//todo: find by hash and using router
const StoreItem: React.FC<ProductProps> = (props: ProductProps) => {
  const { currency, id, name, price, imgUrl, description } = {
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
    <Box
      sx={{
        background: "#ffffff",
        borderRadius: "15px",
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      className="store-item"
    >
      <Grid
        container
        spacing={4}
        columns={{ xs: 12 }}
        className="storeitem"
        sx={{ mb: 3, borderRadius: "1rem" }}
      >
        <Grid item xs={12}>
          <Paper
            className="product-image"
            elevation={0}
            sx={{
              p: { xs: "0 10px", md: "0 25px" },
            }}
          >
            <img
              src={imgUrl}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "contain",
              }}
            />
          </Paper>
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
            <Grid item xs={12}>
              <Paper
                className="product-description"
                elevation={0}
                sx={{
                  p: { xs: "0 10px", md: "0 25px" },
                }}
              >
                {description}
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Paper
            className="product-footer"
            elevation={0}
            sx={{
              p: { xs: "0 10px", md: "0 25px", display: "flex" },
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
                  <DeleteIcon />
                  {/* or "remove" */}
                </CustomButton>
              </>
            ) : (
              <CustomButton color="primary" onClick={() => addToCart(props)}>
                Add to cart
              </CustomButton>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StoreItem;
