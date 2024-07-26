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
import { getAmount } from "../utils/utils";

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
    (item: ProductProps) => <strong>{item.name}</strong>,
    (item: ProductProps) => (
      <>
        {defaultCurrency}
        {item.price}
      </>
    ),
    (item: ProductProps) => (
      <ItemAmount
        amount={getAmount(item.amount)}
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
      <div className="remove-from-cart">
        <CustomButton
          color="primary"
          variant="outlined"
          type={"cart"}
          sx={{ mr: "5px" }}
          //
          onClick={() => removeFromCart(item)}
        >
          <ClearIcon />
        </CustomButton>
      </div>
    ),
  ];

  return (
    <Drawer open={isOpen} anchor="right" onClose={onClose}>
      <Box
        sx={
          items.length > 0
            ? { width: "43.75rem", mt: "0.75rem", ml: "0.5rem", mr: "0.5rem" }
            : {
                width: "30rem",
                mt: "0.75rem",
                ml: "0rem",
                mr: "0rem",
              }
        }
      >
        <Grid container columns={{ xs: 12 }} sx={{ pr: 0.5 }}>
          <Grid item xs={11} sx={{ pl: 2 }}>
            <Typography
              variant="h4"
              component="h4"
              className="shopping-cart-title"
              sx={
                items.length > 0 ? { color: "#000000de" } : { color: "#8b8b8b" }
              }
            >
              Cart
            </Typography>
          </Grid>
          <Grid item xs={1} sx={{ textAlign: "right", pr: 0 }}>
            <IconButton onClick={toggleDrawer(false)} color="secondary">
              <ClearIcon sx={{ fill: "#212121" }} />
            </IconButton>
          </Grid>
        </Grid>

        {items.length > 0 ? (
          <>
            <TableContainer>
              <Table
                sx={{ minWidth: 650, fontSize: "16px" }}
                aria-label="shopping-cart-table"
                className="shopping-cart-table"
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <CartTotalItem />
          </>
        ) : (
          <>
            <hr style={{ borderTop: 0 }} />
            <NoItems />
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default ShoppingCart;
