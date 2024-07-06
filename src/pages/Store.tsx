import React, { useContext, useEffect } from "react";
import storeItems from "../data/store.json";
import { Grid } from "@mui/material";
import StoreItem from "../components/StoreItem";
import {
  ShoppingCartContext,
  useShoppingContext,
} from "../context/ShoppingCartContext";

const Store: React.FC = () => {
  // const context = useContext(ShoppingCartContext);

  // useEffect(() => {
  //   const x = context;
  //   console.log("items", x);
  // }, []);

  return (
    <div>
      <h2>Store Page</h2>
      <p>Welcome to the Store Page</p>

      <Grid
        container
        spacing={2}
        columns={{ xs: 12 }}
        sx={{ pl: 4, pr: 4 }}
        className="storeItemContainer"
      >
        {/* filter databased on search query,  context as idea */}
        {storeItems.map((item, index) => (
          <Grid item key={index} xs={4} sx={{ mb: 3 }}>
            {/*  lg={12} */}
            <StoreItem amount={0} {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Store;
