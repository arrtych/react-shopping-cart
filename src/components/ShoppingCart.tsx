import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { ChildCare } from "@mui/icons-material";

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

  const DrawerList = <Box onClick={toggleDrawer(false)}>1...2..3</Box>;
  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={isOpen} anchor="right" onClose={onClose}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default ShoppingCart;
