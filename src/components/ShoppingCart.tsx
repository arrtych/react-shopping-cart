import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
// import { ChildCare } from "@mui/icons-material";
import {
  ShoppingCartContext,
  useShoppingContext,
} from "../context/ShoppingCartContext";
import StoreItem from "./StoreItem";
import CartItem from "./CartItem";
import CartTotalItem from "./CartITotaltem";

interface StoreItemProps {
  isOpen: boolean;
  onClose: () => void;
}

type Anchor = "top" | "left" | "bottom" | "right";

const ShoppingCart: React.FC<StoreItemProps> = (props: StoreItemProps) => {
  let { isOpen, onClose } = { ...props };
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    onClose();
  };

  const {
    addToCart,
    removeFromCart,
    increaseItemAmount,
    getItemAmount,
    getTotalAmount,
    decreaseCartAmount,
    items,
  } = useContext(ShoppingCartContext);

  // const CartContent = <Box onClick={toggleDrawer(false)}>1...2..3</Box>;
  let amount = getTotalAmount() || 0;

  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      {/* onClick={toggleDrawer(false)} */}
      <Drawer open={isOpen} anchor="right" onClose={onClose}>
        <Box sx={{ width: "50rem" }}>
          <Grid container columns={{ xs: 12 }}>
            <Grid item xs={12}>
              <Typography variant="h2" component="h2">
                Cart
              </Typography>
            </Grid>
            {/* <Box onClick={toggleDrawer(false)}>dsfdjlkdsjkl</Box> */}
          </Grid>

          {items.length > 0 ? (
            <>
              <Grid container columns={{ xs: 12 }} sx={{ rowGap: 3 }}>
                {items.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </Grid>
              <CartTotalItem />
            </>
          ) : (
            <div>No items at the moment</div>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
