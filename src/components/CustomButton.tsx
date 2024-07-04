import { Button, ButtonOwnProps } from "@mui/material";
import React, { ReactNode } from "react";
import { JsxElement } from "typescript";
import { OverridableStringUnion } from "@mui/types";
import { IconButton } from "@mui/material";

interface ButtonProps {
  color?: ButtonOwnProps["color"];
  sx?: ButtonOwnProps["sx"];
  variant?: ButtonOwnProps["variant"];
  //   icon?: any; // todo:change
  children?: ReactNode;
  onClick?: () => void;
  type?: "cart" | "";
}

const CustomButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, color, variant, onClick, sx } = {
    variant: "contained" as ButtonOwnProps["variant"],
    ...props,
  };

  return (
    <>
      {props.type == "cart" ? (
        <IconButton onClick={onClick} sx={sx} color="primary">
          {children}
        </IconButton>
      ) : (
        <Button
          variant={variant}
          sx={sx}
          color={color}
          size="small"
          onClick={onClick}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default CustomButton;
