import React, { useEffect, useState } from "react";
import storeItems from "../data/database";
import { Grid } from "@mui/material";
import StoreItem from "../components/StoreItem";
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

  const handleSearchClose = () => {
    setSearchTerm("");
  };

  return (
    <>
      <h2>Store Page</h2>
      {/* <p>Welcome to the Store Page</p> */}

      <Grid
        container
        sx={{ pl: 4, pt: 4, pb: 8, pr: 4 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4} sx={{}}>
          <Search
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClose={handleSearchClose}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        columns={{ xs: 12 }}
        sx={{ pl: 4, pr: 4 }}
        className="storeitem-container"
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
