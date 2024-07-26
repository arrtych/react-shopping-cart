import React from "react";
import Carousel from "../components/Carousel";
import { Container, Grid } from "@mui/material";

const Home: React.FC = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 64px)",
        marginTop: "64px",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          paddingTop: "0 !important",
          height: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          className="carousel-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
