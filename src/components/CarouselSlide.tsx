import React, { useContext } from "react";
import { ProductProps } from "../types/Product";
import { SplideSlide } from "@splidejs/react-splide";
import CustomButton from "./CustomButton";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export interface CarouselSlideProps {
  product: ProductProps;
}

const CarouselSlide: React.FC<CarouselSlideProps> = (
  props: CarouselSlideProps
) => {
  const { product } = { ...props };
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <>
      <SplideSlide>
        <img src={product.imgUrl} alt={product.name} />
        <CustomButton color="primary" onClick={() => addToCart(product)}>
          Add to cart
        </CustomButton>
      </SplideSlide>
    </>
  );
};

export default CarouselSlide;
