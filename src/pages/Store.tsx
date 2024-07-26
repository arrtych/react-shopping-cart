import React, { useEffect, useState } from "react";
import storeItems from "../data/database";
import { Grid, Typography } from "@mui/material";
import StoreItem from "../components/StoreItem";
import Search from "../components/Search";
import { useLocation } from "react-router-dom";
import SearchOffIcon from "@mui/icons-material/SearchOff";

const Store: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(storeItems);
  const location = useLocation();

  useEffect(() => {
    setFilteredItems(
      storeItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.description &&
            item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );

    const params = new URLSearchParams(location.search);
    const productId = params.get("product");

    if (productId) {
      const productElement = document.getElementById(`product-${productId}`);
      if (productElement) {
        productElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchTerm, location]);

  const handleSearchClose = (): void => {
    setSearchTerm("");
  };

  const NoSearchResult: React.FC = (): JSX.Element => {
    return (
      <Grid
        container
        className="no-search"
        sx={{
          color: "#114d898c",
          display: "flex",
          width: "auto",
          margin: "0",
          alignItems: "flex-start",
          gap: "10px",
          flexDirection: "row",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            flex: "0 1 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <SearchOffIcon sx={{ width: "7em", height: "8em" }} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            flex: "0 1 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" className="no-search-text">
            No items found
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <h2>Store Page</h2>
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

      {filteredItems && filteredItems.length === 0 && <NoSearchResult />}

      <Grid
        container
        spacing={2}
        columns={{ xs: 12 }}
        sx={{ pl: 4, pr: 4 }}
        className="storeitem-container"
      >
        {filteredItems.map((item, index) => (
          <Grid
            item
            key={item.id}
            xs={4}
            sx={{ mb: 3 }}
            id={`product-${item.id}`}
          >
            <StoreItem amount={0} {...item} searchTerm={searchTerm} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Store;
