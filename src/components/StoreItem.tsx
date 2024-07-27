import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import ItemAmount from "./ItemAmount";
import { ProductProps } from "../types/Product";
import { defaultCurrency } from "../utils/constants";
import DeleteIcon from "@mui/icons-material/DeleteOutline";

//todo: useMediaQuery for card swhong on mobile by one card

const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm.trim()) return text;

  const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <mark key={index}>{part}</mark>
    ) : (
      part
    )
  );
};

const StoreItem: React.FC<ProductProps> = (props: ProductProps) => {
  const { currency, id, name, price, imgUrl, description, searchTerm } = {
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
      <Grid container columns={{ xs: 12 }} sx={{ borderRadius: "1rem" }}>
        <Grid item xs={12}>
          {/* Product Image */}
          <Paper
            className="product-image"
            elevation={0}
            sx={{
              p: { xs: "0 10px", md: "0 25px" },
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={imgUrl} />
          </Paper>
        </Grid>

        {/* Product Name, Description, Price... */}
        <Grid item xs={12} sx={{ marginTop: "1.2em", marginBottom: "1.2em" }}>
          <Grid container columns={{ xs: 12 }}>
            <Grid item xs={6} sx={{ marginBottom: "1em" }}>
              <Typography variant="h5" gutterBottom sx={{ ml: 3 }}>
                {highlightText(name, searchTerm)}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                textAlign: "right",
              }}
            >
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
                {description && highlightText(description, searchTerm)}
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Product actions */}
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
              p: { xs: "0 10px", display: "flex" },
              mb: "9px",
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
                    marginRight: "15px",
                    // margin: "30px 0px",
                  }}
                  color="error"
                  onClick={() => removeFromCart(props)}
                >
                  <DeleteIcon />
                  {/* or "remove" */}
                </CustomButton>
              </>
            ) : (
              <CustomButton
                color="primary"
                variant="outlined"
                onClick={() => addToCart(props)}
                sx={{ marginRight: "15px" }}
              >
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
