import {
  Box,
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
// import { ChildCare } from "@mui/icons-material";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import CartTotalItem from "./CartITotaltem";
import Paper from "@mui/material/Paper";
import CustomButton from "./CustomButton";
import { defaultCurrency } from "../utils/constants";

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

  const { getTotalPrice, removeFromCart, getItemTotalAmount, items } =
    useContext(ShoppingCartContext);

  const tableHeaders = ["", "Name", "Price", "Amount", "Subtotal", ""];

  let amount = getTotalPrice() || 0;
  const currency = defaultCurrency;

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
              {/* <Grid container columns={{ xs: 12 }} sx={{ rowGap: 3 }}>
                {items.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </Grid>
              <CartTotalItem /> */}

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {tableHeaders.map((header, idx) => (
                        <TableCell
                          key={`${header}-${idx}`}
                          sx={{ fontWeight: "bold" }}
                          align="center"
                        >
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow
                        key={item.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <img
                            src={item.imgUrl}
                            style={{
                              height: "100px",
                              width: "125px",
                              objectFit: "cover",
                            }}
                          />
                        </TableCell>

                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">
                          {currency} {item.price}
                        </TableCell>
                        <TableCell align="center">{item.amount}</TableCell>
                        <TableCell align="center">
                          {currency}
                          {getItemTotalAmount(item.id)}
                        </TableCell>
                        <TableCell align="center">
                          <CustomButton
                            color="primary"
                            variant="outlined"
                            onClick={() => removeFromCart(item)}
                          >
                            <ClearIcon />
                          </CustomButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <CartTotalItem />
            </>
          ) : (
            <div>No items at the moment</div>
          )}
        </Box>

        {/* //todo: closeIcon button */}
        {/* <Button onClick={toggleDrawer(false)}>Close drawer</Button> */}
      </Drawer>
    </>
  );
};

export default ShoppingCart;
