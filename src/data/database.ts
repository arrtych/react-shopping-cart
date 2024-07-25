import { ProductProps } from "../types/Product";

const db: ProductProps[] = [
  {
    name: "Apple MacBook",
    price: 1999,
    imgUrl: "/imgs/m3-intro-image.png",
    description: "",
  },
  {
    name: "Keyboard",
    price: 29.99,
    imgUrl: "/imgs/keyboard-kb900-black-gallery-1.avif",
    description: "",
  },
  {
    name: "PC speakers",
    price: 109.99,
    imgUrl: "/imgs/G2000_Speaker_Product_Picture_red_1.webp",
    description: "https://hecategaming.com/en-eu/products/g2000-red",
  },

  {
    name: "Watch",
    price: 420.0,
    imgUrl: "/imgs/AW_Ultra2_49mm_TI_Alpine_indigo-full-product-front-600.png",
    description: "https://www.vodafone.co.uk/smart-watches-and-wearables/apple",
  },
  {
    name: "Tablet",
    price: 800.0,
    imgUrl: "/imgs/samsung-galaxy-tab-s8-tahvelarvuti-hall-eest-tagant.png",
    description:
      "https://pood.telia.ee/ru/tooted/Samsung-Galaxy-Tab-S8-11-5G-128-GB-heleroosa/SM-X706BIDAEUE",
  },
  {
    name: "Monitor",
    price: 420.0,
    imgUrl: "/imgs/7aab240fb56a4ad69ef5b012005e2f61.webp",
    description:
      "htttps://www.philips.co.id/c-p/345M2CRZ_70/momentum-curved-ultrawide-lcd-display",
  },
  {
    name: "Scooter",
    price: 420.0,
    imgUrl: "/imgs/scooter1.webp",
    description:
      "hhttps://touch.com.ua/item/elektrosamokat-xiaomi-mi-electric-scooter-pro-3-black/",
  },
  {
    name: "Console",
    price: 420.0,
    imgUrl: "/imgs/ps5-buy-now-product-thumbnail-01-en-18mar22.webp",
    description: "https://www.playstation.com/ru-ua/ps5/buy-now/",
  },
  {
    name: "Headphones",
    price: 15.0,
    imgUrl:
      "/imgs/GUEST_ae460959-e23b-4c7b-9b1f-ee5427a949c9-removebg-preview.png",
    description:
      "https://www.electrogor.ru/kompjuternye-myshi/mysh-logitech-g502-hero-wired-gaming-mouse-black.html , https://steelseries.com/blog/which-steelseries-mouse-fits-your-gaming-style-712",
  },

  {
    name: "Vacuum Cleaner",
    price: 157.45,
    imgUrl: "/imgs/10-720x720.png",
    description:
      "https://robot4home.ru/xiaomi-mi-mijia-robot-vacuum-mop-3c-c103.htmll",
  },

  {
    name: "TV",
    price: 157.45,
    imgUrl: "/imgs/N5000-Series-5-black1.jpg",
    description:
      "https://mactime.pro/tv/televizory/samsung-32-n5000-s5-black.html",
  },

  {
    name: "Portable Speaker",
    price: 179.99,
    imgUrl: "/imgs/ac9dd090-3f71-454b-aded-9cec2af981d2.webp",
    description:
      "https://www.target.com/p/beats-studio-pro-bluetooth-wireless-headphones-black/-/A-89401490",
  },
].map((item, i) => ({ ...item, id: i + 1 }));

export default db;
