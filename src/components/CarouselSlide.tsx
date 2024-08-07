import React, { useContext } from "react";
import { ProductProps } from "../types/Product";
import { SplideSlide } from "@splidejs/react-splide";
import CustomButton from "./CustomButton";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { defaultCurrency } from "../utils/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollTo } from "../utils/utils";
import { useDrawer } from "../context/DrawerContext";

export interface CarouselSlideProps {
  product: ProductProps;
}

const CarouselSlide: React.FC<CarouselSlideProps> = (
  props: CarouselSlideProps
) => {
  const { product } = { ...props };
  const { increaseItemAmount } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const { toggle: toggleDrawer } = useDrawer();

  const handleProductClick = (productId: number) => {
    navigate(`/store?product=${productId}`);
    // scrollTo(productId.toString());
  };

  return (
    <SplideSlide>
      <div className="splideSlide-container">
        <div style={{ margin: "0px" }}>
          <Grid
            container
            sx={{
              // backgroundColor: "#4a63c0", // blue
              p: "85px",
              // borderRadius: "50px",
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)",
              // boxShadow:
              //   "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 4px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
              // border: "1px solid",

              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                border: "1.5px solid #6d85b06b",
                borderRadius: "15px",
                overflow: "hidden",
                // boxShadow: "rgb(255 174 61)  0px 0px 10px",
                boxShadow:
                  "rgb(255 174 61 / 50%) 0px -2px 4px, rgb(255 174 61 / 25%) 0px -4px 8px, rgb(255 174 61 / 10%) 0px -8px 16px, rgb(255 174 61 / 5%) 0px -16px 32px",
              }}
              className="splideSlide-container-white"
            >
              <Grid
                container
                sx={{
                  backgroundColor: "#fff",
                  p: "35px",
                  // borderRadius: "30px",
                  // boxShadow:
                  //   "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",

                  // boxShadow:
                  //   "rgba(50, 50, 93, 0.25) -5px 8px 20px -12px inset, rgba(0, 0, 0, 0.3) 14px 12px 20px -18px inset",

                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <Grid
                  item
                  xs={7}
                  className="splideSlide-left"
                  sx={{ display: "flex" }}
                >
                  <Grid container>
                    <Grid item xs={12} className="product-name-grid">
                      <h2
                        // variant="h2"
                        className="product-name"
                        // sx={{ color: "#ffcf70" }}
                      >
                        {product.name}
                      </h2>
                    </Grid>

                    <Grid item xs={12} className="product-price-grid">
                      <p className="product-price-old">
                        {defaultCurrency}
                        {product.oldPrice || 0}
                      </p>
                      <p
                        // variant="h5"
                        className="product-price"
                        // style={{ color: "#7b7b7b" }}
                      >
                        {defaultCurrency}
                        {product.price}
                      </p>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sx={{ marginRight: "30px" }}
                      className="product-description-grid"
                    >
                      <p
                        className="product-description"
                        // style={{ marginBottom: "1.25rem" }}
                      >
                        {product.description}
                      </p>
                    </Grid>

                    <Grid item xs={12} className="product-buttons">
                      <CustomButton
                        color="primary"
                        variant="outlined"
                        onClick={() => {
                          increaseItemAmount(product);
                          toggleDrawer();
                        }}
                      >
                        Add to cart
                      </CustomButton>
                      <CustomButton
                        onClick={() => handleProductClick(product.id)}
                        color="primary"
                      >
                        Read more
                      </CustomButton>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  className="splideSlide-right"
                  xs={5}
                  sx={{ display: "flex", justifyContent: "end" }}
                  // p: "45px"
                >
                  <div className="product-image-custom">
                    <img
                      src={product.image.url}
                      alt={product.name}
                      style={{
                        width: "100%",
                        // height: "600px",
                        objectFit: "contain",
                        // borderRadius: "50%",
                        maxWidth: "300px",
                        aspectRatio: "1",
                        // boxShadow:
                        //   "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </SplideSlide>
  );
};

export default CarouselSlide;
