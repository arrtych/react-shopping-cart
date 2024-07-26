import React from "react";
import Carousel from "../components/Carousel";
import { Container, Grid } from "@mui/material";

const Home: React.FC = () => {
  return (
    <div
      style={{
        // background: "linear-gradient(to bottom, #b8c6df 0%, #6d88b7 100%)",
        height: "calc(100vh - 64px)",
      }}
    >
      {/* <h2>Home Page</h2> */}

      <Grid
        container
        sx={{
          // mt: "64px",
          pt: "60px",

          // py: "50px",

          // height: "100vh",
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
            // position: "relative", // doubt
          }}
        >
          <Carousel />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
