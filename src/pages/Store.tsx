import React from "react";
import storeItems from "../data/store.json";
import { Grid } from "@mui/material";
import StoreItem from "../components/StoreItem";

const Store: React.FC = () => {
  return (
    <div>
      <h2>Store Page</h2>
      <p>Welcome to the Store Page</p>

      <Grid container spacing={2} columns={{ xs: 12 }}>
        {storeItems.map((item, index) => (
          <Grid item key={index} xs={6}>
            <StoreItem {...item}>{item.name}</StoreItem>
            {JSON.stringify(item)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Store;
