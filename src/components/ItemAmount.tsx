import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ItemAmountProps {
  amount: number;
  increase: () => void;
  decrease: () => void;
}

const ItemAmount: React.FC<ItemAmountProps> = (props) => {
  const { increase, decrease, amount } = { ...props };
  return (
    <>
      <CustomButton
        color="primary"
        variant="outlined"
        onClick={() => decrease()}
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
      <CustomButton color="primary" onClick={() => increase()}>
        <AddIcon />
      </CustomButton>
    </>
  );
};

export default ItemAmount;
