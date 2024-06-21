import { Button, ButtonOwnProps } from "@mui/material";
import React, { ReactNode } from "react";
import { JsxElement } from "typescript";
import { OverridableStringUnion } from "@mui/types";

interface ButtonProps {
  color?: ButtonOwnProps["color"];
  variant?: ButtonOwnProps["variant"];
  //   icon?: any; // todo:change
  children?: ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, color, variant, onClick } = {
    variant: "contained" as ButtonOwnProps["variant"],
    ...props,
  };

  return (
    <>
      <Button variant={variant} color={color} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default CustomButton;
