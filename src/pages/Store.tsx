import React, { useContext, useEffect, useState } from "react";
import storeItems from "../data/store.json";
import { Grid, InputBase } from "@mui/material";
import StoreItem from "../components/StoreItem";
import {
  ShoppingCartContext,
  useShoppingContext,
} from "../context/ShoppingCartContext";
import Search from "../components/Search";

const Store: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(storeItems);

  useEffect(() => {
    setFilteredItems(
      storeItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <>
      <h2>Store Page</h2>
      {/* <p>Welcome to the Store Page</p> */}

      <Grid container sx={{ p: 4 }}>
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Search
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        columns={{ xs: 12 }}
        sx={{ pl: 4, pr: 4 }}
        className="storeItemContainer"
      >
        {filteredItems.map((item, index) => (
          <Grid item key={index} xs={4} sx={{ mb: 3 }}>
            <StoreItem amount={0} {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Store;
