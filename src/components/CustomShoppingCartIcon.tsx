import React, { useContext } from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CSSTransitionGroup from "react-transition-group";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

interface ShoppingCartIconProps {
  amount?: number;
  isOpen: boolean;
}

const CustomShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({}) => {
  const { getCartItemsAmount } = useContext(ShoppingCartContext);

  let amount = getCartItemsAmount();

  return (
    <StyledBadge badgeContent={amount} color={"warning"}>
      <ShoppingCartIcon />
    </StyledBadge>
  );
};

export default CustomShoppingCartIcon;
