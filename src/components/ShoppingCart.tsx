import { Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { ChildCare } from "@mui/icons-material";

interface StoreItemProps {
  isOpen: boolean;
}

type Anchor = "top" | "left" | "bottom" | "right";

const ShoppingCart: React.FC<StoreItemProps> = (props: StoreItemProps) => {
  const { isOpen } = { ...props };
  //   const [open, setOpen] = useState(false);

  //   const toggleDrawer = (newOpen: boolean) => () => {
  //     setOpen(newOpen);
  //   };

  const DrawerList = <div>1...2..3</div>;
  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      {/* onClose={toggleDrawer(false)} */}
      <Drawer open={isOpen} anchor="right">
        {DrawerList}
      </Drawer>
    </>
  );
};

export default ShoppingCart;
