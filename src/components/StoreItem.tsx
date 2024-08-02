import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import ItemAmount from "./ItemAmount";
import { ProductProps } from "../types/Product";
import { defaultCurrency } from "../utils/constants";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import db from "../data/database";
import { getImgSize } from "../utils/utils";
import { useDrawer } from "../context/DrawerContext";
import { ImageProps } from "../types/Image";

const highlightText = (text: string, searchTerm: string) => {
  if (!searchTerm.trim()) return text;

  const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <mark key={index}>{part}</mark>
    ) : (
      part
    )
  );
};

function getObjectById(
  items: ImageProps[],
  id: number
): ImageProps | undefined {
  return items.find((item) => item.id === id);
}
//save to database
const StoreItem: React.FC<ProductProps> = (props: ProductProps) => {
  // const [imageData, setImageData] = useState<ImageProps[]>([]);
  const { toggle: toggleDrawer } = useDrawer();
  useEffect(() => {
    // const fetchImageDimensions = async () => {
    //   const promises = db.map(
    //     //map to another function
    //     (image) =>
    //       new Promise<ImageProps>((resolve) => {
    //         getImgSize(
    //           image.imgUrl,
    //           (dimensions: { width: any; height: any }) => {
    //             resolve({
    //               id: image.id,
    //               name: image.name,
    //               width: dimensions.width,
    //               height: dimensions.height,
    //             });
    //           }
    //         );
    //       })
    //   );
    //   const results = await Promise.all(promises);
    //   console.log("results", results);
    //   setImageData(results);
    // };
    // fetchImageDimensions();
  }, []);

  const { currency, id, name, price, description, searchTerm, image } = {
    currency: defaultCurrency,
    ...props,
  };
  const {
    addToCart,
    removeFromCart,
    increaseItemAmount,
    getItemAmount,
    decreaseItemAmount,
  } = useContext(ShoppingCartContext);

  let amount = getItemAmount(id);
  const isInCart = !!amount;

  // const getImageData = (
  //   imageData: ImageProps[],
  //   id: number
  // ): { width?: number; height?: number } | undefined => {
  //   const foundItem = getObjectById(imageData, id);
  //   let image;
  //   if (foundItem) {
  //     image = { width: foundItem?.width, height: foundItem?.height };
  //     return image;
  //   }
  // };

  // const OtherComponent = React.lazy(() => import(storeItems);
  // const OtherComponent = React.lazy(() => import(storeItems as ProductProps[]));
  // const OtherComponent = React.lazy(() => import(storeItems[0].path));

  return (
    <Box
      sx={{
        background: "#ffffff",
        borderRadius: "15px",
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      className="product-item"
    >
      <Grid container columns={{ xs: 12 }} sx={{ borderRadius: "1rem" }}>
        <Grid item xs={12}>
          {/* Product Image */}
          <Paper
            className="product-image blink"
            elevation={0}
            sx={{
              p: { xs: "0 10px" },
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "25px 25px 0 25px",
              backgroundColor: "#ffcf70d6 !important",
            }}
          >
            <div className="product-image-element">
              <img
                src={image.url}
                alt={""}
                // width={getImageData(imageData, id)?.width?.toString()}
                // height={getImageData(imageData, id)?.height?.toString()} // todo: not to call another request
                width={image.width}
                height={image.height}
              />
            </div>
          </Paper>
        </Grid>

        {/* Product Name, Description, Price... */}
        <Grid item xs={12} sx={{ marginTop: "1.2em", marginBottom: "1.2em" }}>
          <Grid container columns={{ xs: 12 }}>
            <Grid item xs={6} sx={{ marginBottom: "1em" }}>
              <Typography variant="h5" gutterBottom sx={{ ml: 3 }}>
                {highlightText(name, searchTerm)}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                textAlign: "right",
              }}
            >
              <Typography variant="h5" sx={{ mr: 3, color: "#7b7b7b" }}>
                {currency}
                {price}
              </Typography>
            </Grid>

            {/* todo: change maxHeight with new fonts */}
            <Grid item xs={12} sx={{}}>
              <Paper
                className="product-description"
                elevation={0}
                sx={{
                  p: { xs: "0 10px", md: "0 25px" },
                  maxHeight: "66px",
                }}
              >
                {description && highlightText(description, searchTerm)}
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Product actions */}
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Paper
            className="product-footer"
            elevation={0}
            sx={{
              p: { xs: "0 10px", display: "flex" },
              mb: "9px",
            }}
          >
            {isInCart ? (
              <>
                <ItemAmount
                  amount={amount}
                  increase={() => increaseItemAmount(props)}
                  decrease={() => decreaseItemAmount(props)}
                />

                <CustomButton
                  sx={{
                    marginLeft: "1rem",
                    marginRight: "15px",
                    // margin: "30px 0px",
                  }}
                  color="error"
                  onClick={() => removeFromCart(props)}
                >
                  <DeleteIcon />
                </CustomButton>
              </>
            ) : (
              <CustomButton
                color="primary"
                variant="outlined"
                onClick={() => {
                  addToCart(props);
                  toggleDrawer();
                }}
                sx={{ marginRight: "15px" }}
              >
                Add to cart
              </CustomButton>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StoreItem;
