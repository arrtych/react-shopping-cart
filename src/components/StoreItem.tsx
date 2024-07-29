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
import { useMemo } from "react";
import { JsxElement } from "typescript";
import { Suspense } from "react";
import storeItems from "../data/database";
import { useDrawer } from "../context/DrawerContext";

// const MemoizedImage = React.memo(({ src, alt }: any) => (
//   <img src={src} alt={alt} />
// ));

interface ImageProps2 {
  src: string;
  alt: string;
  width: string | undefined;
  height: string | undefined;
}

const MemoizedImage: React.FC<ImageProps2> = React.memo(
  ({ src, alt, width, height }) => {
    return (
      <img
        loading="eager"
        decoding="async"
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
    );
  }
);

function ResponsiveImage({ src, alt }: any) {
  return (
    <img src={src} srcSet={src} alt={alt} loading="eager" decoding="async" />
  );
}

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

interface ImageProps {
  id: number;
  name: string;
  width: number;
  height: number;
  // alt
}

function getObjectById(
  items: ImageProps[],
  id: number
): ImageProps | undefined {
  return items.find((item) => item.id === id);
}
//save to database
const StoreItem: React.FC<ProductProps> = (props: ProductProps) => {
  const [imageData, setImageData] = useState<ImageProps[]>([]);
  const { changeDrawer } = useDrawer();
  useEffect(() => {
    const fetchImageDimensions = async () => {
      const promises = db.map(
        //map to another function
        (image) =>
          new Promise<ImageProps>((resolve) => {
            getImgSize(
              image.imgUrl,
              (dimensions: { width: any; height: any }) => {
                resolve({
                  id: image.id,
                  name: image.name,
                  width: dimensions.width,
                  height: dimensions.height,
                });
              }
            );
          })
      );

      const results = await Promise.all(promises);
      console.log("results", results);
      setImageData(results);
    };

    fetchImageDimensions();
  }, []);

  const { currency, id, name, price, imgUrl, description, searchTerm } = {
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

  const getImageData = (
    imageData: ImageProps[],
    id: number
  ): { width?: number; height?: number } | undefined => {
    const foundItem = getObjectById(imageData, id);
    let image;
    if (foundItem) {
      image = { width: foundItem?.width, height: foundItem?.height };
      return image;
    }
    // console.log("image", image);
  };

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
                src={imgUrl}
                alt=""
                width={getImageData(imageData, id)?.width?.toString()}
                height={getImageData(imageData, id)?.height?.toString()} // todo: not to call another request
              />

              {/* <MemoizedImage
                width={getImageData(imageData, id)?.width?.toString()}
                height={getImageData(imageData, id)?.height?.toString()} // todo: not to call another request
                src={imgUrl}
                alt="Description"
              /> */}

              {/* <ResponsiveImage age src={imgUrl} alt="Description" /> */}

              {
                //
              }
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
                  {/* or "remove" */}
                </CustomButton>
              </>
            ) : (
              <CustomButton
                color="primary"
                variant="outlined"
                onClick={() => {
                  addToCart(props);
                  changeDrawer();
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
