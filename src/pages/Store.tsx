import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import StoreItem from "../components/StoreItem";
import Search from "../components/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useLocation } from "react-router-dom";
import storeItems from "../data/database";
import { useMemo } from "react";

const Store: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(storeItems);
  const location = useLocation();

  const processedData = useMemo(() => {
    return storeItems.map((product) => ({
      ...product,
    }));
  }, [storeItems]);

  useEffect(() => {
    setFilteredItems(
      processedData.filter(
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
        productElement.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  }, [searchTerm, location, processedData]);

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
          gap: "20px",
          flexDirection: "row",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          top: "calc((100vh + 64px) / 2)",
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
          <SearchOffIcon
            sx={{ width: "7em", height: "8em" }}
            className="animate__animated animate__zoomIn"
          />
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
          <Typography
            variant="h2"
            className="no-search-text animate__animated animate__zoomIn"
          >
            No matches found for "{searchTerm}"
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Grid
        container
        sx={{ pl: 4, pt: 4, pb: 8, pr: 4, marginTop: "64px", padding: "0px" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          id="search-container"
          item
          xs={12}
          md={6}
          sx={{ margin: "1.5em 0px" }}
        >
          <Search
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClose={handleSearchClose}
          />
        </Grid>
      </Grid>

      {filteredItems?.length !== 0 ? (
        <Grid
          container
          component={"ul"}
          columns={{ xs: 12 }}
          sx={{
            gap: "2em",
            p: 0,
            listStyle: "none",
            maxWidth: "var(--desktop-breakpoint)",
            margin: "0 auto",
            mb: "172px",
            justifyContent: "center",
          }}
          className="storeitem-container"
        >
          {filteredItems.map((item, index) => (
            <Grid
              item
              key={item.id}
              component={"li"}
              xs={4}
              sx={{ maxWidth: "calc((var(--desktop-breakpoint) / 3) - 23px)" }}
              id={`product-${item.id}`}
              // className={item.id === 4 ? "pr-appear" : ""}
            >
              <StoreItem amount={0} {...item} searchTerm={searchTerm} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <NoSearchResult />
      )}
    </>
  );
};

export default Store;
