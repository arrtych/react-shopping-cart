import React, { useContext } from "react";
import { ProductProps } from "../types/Product";
import { SplideSlide } from "@splidejs/react-splide";
import CustomButton from "./CustomButton";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { defaultCurrency } from "../utils/constants";

export interface CarouselSlideProps {
  product: ProductProps;
}

const CarouselSlide: React.FC<CarouselSlideProps> = (
  props: CarouselSlideProps
) => {
  const { product } = { ...props };
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <SplideSlide>
      <div className="splideSlide-container">
        <div style={{ margin: "75px 10vw" }}>
          <Grid
            container
            sx={{
              // backgroundColor: "#4a63c0", // blue
              p: "65px",
              borderRadius: "50px",
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
              }}
            >
              <Grid
                container
                sx={{
                  backgroundColor: "#fff",
                  p: "40px",
                  // borderRadius: "30px",
                  // boxShadow:
                  //   "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",

                  // boxShadow:
                  //   "rgba(50, 50, 93, 0.25) -5px 8px 20px -12px inset, rgba(0, 0, 0, 0.3) 14px 12px 20px -18px inset",

                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <Grid item xs={4}>
                  <Typography variant="h2">{product.name}</Typography>
                  <Typography variant="h4">
                    {defaultCurrency} {product.price}
                  </Typography>
                  <CustomButton
                    color="primary"
                    variant="outlined"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </CustomButton>
                </Grid>

                <Grid
                  item
                  xs={8}
                  sx={{ display: "flex", justifyContent: "end", p: "45px" }}
                >
                  <img
                    src={product.imgUrl}
                    alt={product.name}
                    style={{
                      width: "100%",
                      // height: "600px",
                      objectFit: "cover",
                      borderRadius: "50%",
                      maxWidth: "300px",
                      aspectRatio: "1",
                      boxShadow:
                        "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                    }}
                  />
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
