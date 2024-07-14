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
import React, { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CartTotalItem from "./CartITotaltem";
import Paper from "@mui/material/Paper";
import CustomButton from "./CustomButton";
import { defaultCurrency } from "../utils/constants";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { ProductProps } from "../types/Product";
import NoItems from "./NoItems";
import ItemAmount from "./ItemAmount";

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

  const {
    removeFromCart,
    getItemTotalAmount,
    increaseItemAmount,
    decreaseItemAmount,
    items,
  } = useContext(ShoppingCartContext);

  const tableHeaders = ["", "Name", "Price", "Amount", "Subtotal", ""];

  const tableItems: ((item: ProductProps) => JSX.Element)[] = [
    (item: ProductProps) => (
      <img
        src={item.imgUrl}
        style={{
          height: "100px",
          width: "100px",
          objectFit: "cover",
        }}
      />
    ),
    (item: ProductProps) => <>{item.name}</>,
    (item: ProductProps) => (
      <>
        {defaultCurrency}
        {item.price}
      </>
    ),
    (item: ProductProps) => (
      <ItemAmount
        amount={item.amount}
        type={"cart"}
        sx={{ justifyContent: "center" }}
        increase={() => increaseItemAmount(item)}
        decrease={() => decreaseItemAmount(item)}
      />
    ),
    (item: ProductProps) => (
      <>
        {defaultCurrency}
        {getItemTotalAmount(item.id)}
      </>
    ),
    (item: ProductProps) => (
      <>
        <CustomButton
          color="primary"
          variant="outlined"
          onClick={() => removeFromCart(item)}
        >
          <ClearIcon />
        </CustomButton>
      </>
    ),
  ];

  return (
    <Drawer open={isOpen} anchor="right" onClose={onClose}>
      <Box
        sx={
          items.length > 0
            ? { width: "50rem", mt: "3rem", ml: "0.5rem", mr: "0.5rem" }
            : {
                width: "30rem",
                mt: "3rem",
                ml: "0rem",
                mr: "0rem",
              }
        }
      >
        <Grid container columns={{ xs: 12 }}>
          <Grid item xs={11} sx={{ pl: 2 }}>
            <Typography variant="h4" component="h4">
              Cart
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ textAlign: "right", pr: 0 }}>
            <IconButton onClick={toggleDrawer(false)} color="primary">
              <ClearIcon />
            </IconButton>
          </Grid>
        </Grid>

        {items.length > 0 ? (
          <>
            <TableContainer>
              <Table
                sx={{ minWidth: 650, fontSize: "16px" }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    {tableHeaders.map((header, idx) => (
                      <TableCell
                        key={`${header}-${idx}`}
                        sx={{ fontWeight: "bold", fontSize: "1rem" }}
                        align={header == "Amount" ? "center" : "left"}
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
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {tableItems.map((content, idx) => (
                        <TableCell
                          key={idx}
                          sx={{
                            fontSize: "1rem",
                            textAlign: idx == 3 ? "center" : "",
                            ...(idx == tableItems.length - 1 && {
                              pr: 0,
                            }),
                          }}
                        >
                          {content(item)}
                        </TableCell>
                      ))}

                      {/* <TableCell scope="row">
                          <img
                            src={item.imgUrl}
                            style={{
                              height: "100px",
                              width: "125px",
                              objectFit: "cover",
                            }}
                          />
                        </TableCell>

                        <TableCell align="center" sx={{ fontSize: "1rem" }}>
                          {item.name}
                        </TableCell>

                        <TableCell align="center">
                          {currency} {item.price}
                        </TableCell>
                        <TableCell align="center">{item.amount}</TableCell>
                        <TableCell align="center">
                          {currency}
                          {getItemTotalAmount(item.id)}
                        </TableCell>
                        <TableCell align="center" sx={{ pr: 0 }}>
                          <CustomButton
                            color="primary"
                            variant="outlined"
                            onClick={() => removeFromCart(item)}
                          >
                            <ClearIcon />
                          </CustomButton>
                        </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <CartTotalItem />
          </>
        ) : (
          <NoItems />
        )}
      </Box>
    </Drawer>
  );
};

export default ShoppingCart;
