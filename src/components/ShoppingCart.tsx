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
// import { ChildCare } from "@mui/icons-material";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CartTotalItem from "./CartITotaltem";
import Paper from "@mui/material/Paper";
import CustomButton from "./CustomButton";
import { defaultCurrency } from "../utils/constants";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";

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

  const tableItems: ((item: any) => JSX.Element)[] = [
    (item: any) => (
      <img
        src={item.imgUrl}
        style={{
          height: "100px",
          width: "125px",
          objectFit: "cover",
        }}
      />
    ),
    (item: any) => <>{item.name}</>,
    (item: any) => (
      <>
        {currency} {item.price}
      </>
    ),
    (item: any) => <> {item.amount}</>,
    (item: any) => (
      <>
        {currency}
        {getItemTotalAmount(item.id)}
      </>
    ),
    (item: any) => (
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

  let amount = getTotalPrice() || 0;
  const currency = defaultCurrency;

  return (
    <>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      {/* onClick={toggleDrawer(false)} */}
      <Drawer open={isOpen} anchor="right" onClose={onClose}>
        <Box sx={{ width: "50rem" }}>
          <Grid container columns={{ xs: 12 }}>
            <Grid item xs={11} sx={{ pl: 2 }}>
              <Typography variant="h4" component="h4">
                Cart
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ textAlign: "right", pr: 0 }}>
              <IconButton onClick={toggleDrawer(false)}>
                <ClearIcon />
              </IconButton>
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
                        {tableItems.map((content, idx) => (
                          <TableCell
                            key={idx}
                            align={idx == 0 ? "left" : "center"}
                            sx={{
                              fontSize: "1rem",
                              ...(idx == tableItems.length - 1 && {
                                pr: 0,
                              }),
                            }} //sx={{ pr: 0 }}
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
            <div>No items at the moment</div>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
