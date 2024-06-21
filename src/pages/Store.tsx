import React, { useContext, useEffect } from "react";
import storeItems from "../data/store.json";
import { Grid } from "@mui/material";
import StoreItem from "../components/StoreItem";
import {
  ShoppingCartContext,
  useShoppingContext,
} from "../context/ShoppingCartContext";

const Store: React.FC = () => {
  const context = useContext(ShoppingCartContext);

  useEffect(() => {
    const x = context;
    console.log("items", x);
  }, []);

  return (
    <div>
      <h2>Store Page</h2>
      <p>Welcome to the Store Page</p>

      <Grid container spacing={2} columns={{ xs: 12 }}>
        {storeItems.map((item, index) => (
          <Grid item key={index} xs={6}>
            <StoreItem amount={0} {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Store;
