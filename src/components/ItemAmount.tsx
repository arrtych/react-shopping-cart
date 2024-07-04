import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ItemAmountProps {
  amount: number;
  increase: () => void;
  decrease: () => void;
  type?: "cart" | "";
}

const ItemAmount: React.FC<ItemAmountProps> = (props) => {
  const { increase, decrease, amount, type } = { ...props };
  return (
    //
    <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
      <CustomButton
        color="primary"
        variant="outlined"
        onClick={() => decrease()}
        type={type}
      >
        <RemoveIcon />
      </CustomButton>
      <Typography
        sx={{
          padding: "0 1.25rem",
        }}
      >
        {amount}
      </Typography>
      <CustomButton type={type} color="primary" onClick={() => increase()}>
        <AddIcon />
      </CustomButton>
    </Box>
  );
};

export default ItemAmount;
