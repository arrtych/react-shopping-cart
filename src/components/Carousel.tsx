import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
// import "@splidejs/react-splide/css/core";

import storeItems from "../data/database";
import CarouselSlide from "./CarouselSlide";

const Carousel: React.FC = () => {
  const productIds = [1, 5, 6];

  const filteredProducts = storeItems.filter((product) =>
    productIds.includes(product.id)
  );

  return (
    <>
      <Splide
        aria-label="product-slider"
        options={{
          type: "loop",
          width: "75%",
          fixedWidth: "100%",
          gap: "16vw",
          // padding: { left: "5rem", right: "5rem" },
          easingFunc: (t: number) => {
            return 9 - Math.pow(1 - t, 4);
          },
          // autoplay: true,
        }}
      >
        {filteredProducts.map((product) => (
          <CarouselSlide
            key={`product-${product.id}`}
            product={{ ...product }}
          />
        ))}
      </Splide>
    </>
  );
};

export default Carousel;
