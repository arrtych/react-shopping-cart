import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
// import { ChildCare } from "@mui/icons-material";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import CartTotalItem from "./CartITotaltem";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

type Anchor = "top" | "left" | "bottom" | "right";

const ShoppingCart: React.FC<ShoppingCartProps> = (
  props: ShoppingCartProps
) => {
  let { isOpen, onClose } = { ...props };
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    onClose();
  };

  const { getTotalAmount, items } = useContext(ShoppingCartContext);

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
