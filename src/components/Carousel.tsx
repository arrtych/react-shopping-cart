import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
// import "@splidejs/react-splide/css/core";

import storeItems from "../data/store.json";
import CarouselSlide from "./CarouselSlide";

const Carousel: React.FC = () => {
  const productIds = [1, 4];

  const filteredProducts = storeItems.filter((product) =>
    productIds.includes(product.id)
  );

  return (
    <>
      <Splide
        aria-label="product-slider"
        options={{
          type: "loop",
          autoplay: true,
        }}
      >
        {filteredProducts.map((product) => (
          <SplideSlide>
            <CarouselSlide product={{ ...product, amount: 1 }} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Carousel;
