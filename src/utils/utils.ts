import React, { useMemo } from "react";

export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function round(value: number) {
  return Number(value.toFixed(2));
}

export const getAmount = (amount?: number) => {
  return amount ?? 0;
};

// { width?: number; height?: number } | undefined
export function getImgSize(
  imgSrc: string,
  callback: (props: { width: number; height: number }) => void
) {
  const newImg = new Image();
  newImg.onload = function () {
    const height = newImg.height;
    const width = newImg.width;
    // console.log("width", width);
    // console.log("height", height);
    callback({ width, height });
  };
  newImg.src = imgSrc; // this must be done AFTER setting onload
}

export const scrollTo = (id: string) => {
  //@todo: test
  // debugger;
  const yOffset = -25;
  const el = document.getElementById("product-" + id);
  if (el) {
    const y = el?.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    console.log("you");
  }
};
