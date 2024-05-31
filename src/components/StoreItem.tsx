import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import CustomButton from "./CustomButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  amount?: number;
  currency?: string;
}

//todo: useMediaQuery for card swhong on mobile by one card
// local
const StoreItem: React.FC<StoreItemProps> = (props: StoreItemProps) => {
  const { currency, id, name, price, imgUrl } = { currency: "$", ...props };

  const quantity = 1;
  return (
    <>
      <Grid container spacing={2} columns={{ xs: 12 }}>
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
            <Grid item xs={6}>
              <Typography variant="h4" component="span">
                {price} {currency}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton color="error">{"Remove"}</CustomButton>
          <CustomButton color="primary">
            <AddIcon />
          </CustomButton>
          <div></div>
          <Typography>{quantity}</Typography>
          <CustomButton color="primary" variant="outlined">
            <RemoveIcon />
          </CustomButton>
        </Grid>
      </Grid>
    </>
  );
};

export default StoreItem;
