import { ProductProps } from "../types/Product";

let defaultDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum mattis risus id viverra. Vivamus pellentesque massa erat, ac finibus sapien pretium in. Sed consequat eros orci, in porta diam interdum non. Morbi lacus magna, dapibus aliquet purus ac, mollis fringilla ex. Donec rutrum mi at nibh venenatis bibendum. Fusce luctus, nibh non bibendum rutrum, quam nulla pulvinar massa, quis dapibus justo tellus id sem. Nullam ut ante sit amet urna congue gravida non ac mauris. In elementum lorem sit amet velit hendrerit elementum. Nullam pulvinar, ligula eget sagittis vestibulum, leo nulla laoreet nisi, ut interdum sapien odio ut ex. Suspendisse non nibh non massa imperdiet scelerisque. Aenean vitae sapien sit amet mi viverra ultrices ac in mi. Maecenas consectetur varius mi at elementum. Suspendisse potenti.";

const db: ProductProps[] = [
  {
    name: "Apple MacBook Air",
    price: 999,
    imgUrl: "/imgs/m3-intro-image.png",
    description:
      "Discover the Apple MacBook Air, the epitome of sleek design and powerful performance. This ultra-thin, lightweight laptop features a stunning Retina display and is powered by the latest M1 chip, delivering incredible speed and efficiency. With its all-day battery life, backlit Magic Keyboard, and Touch ID, the MacBook Air is perfect for both work and play.",
  },
  {
    name: "Keyboard",
    price: 99.99,
    imgUrl: "/imgs/keyboard-kb900-black-gallery-1.avif",
    description:
      "Elevate your typing experience with the Logitech MX Keys Advanced Wireless Illuminated Keyboard. Designed for efficiency, stability, and precision, this keyboard features smart illumination that adapts to your environment, a comfortable key layout, and seamless connectivity options. Ideal for both professional and personal use, it ensures effortless productivity and a premium typing experience.",
  },
  {
    name: "PC speakers",
    price: 109.99,
    imgUrl: "/imgs/G2000_Speaker_Product_Picture_red_1.webp",
    description: defaultDescription,
  },

  {
    name: "Watch",
    price: 420.0,
    imgUrl: "/imgs/AW_Ultra2_49mm_TI_Alpine_indigo-full-product-front-600.png",
    description: defaultDescription,
  },
  {
    name: "Tablet",
    price: 800.0,
    imgUrl: "/imgs/samsung-galaxy-tab-s8-tahvelarvuti-hall-eest-tagant.png",
    description: defaultDescription,
  },
  {
    name: "Monitor",
    price: 420.0,
    imgUrl: "/imgs/7aab240fb56a4ad69ef5b012005e2f61.webp",
    description: defaultDescription,
  },
  {
    name: "Scooter",
    price: 420.0,
    imgUrl: "/imgs/scooter1.webp",
    description: defaultDescription,
  },
  {
    name: "Console",
    price: 420.0,
    imgUrl: "/imgs/ps5-buy-now-product-thumbnail-01-en-18mar22.webp",
    description: defaultDescription,
  },
  {
    name: "Headphones",
    price: 15.0,
    imgUrl:
      "/imgs/GUEST_ae460959-e23b-4c7b-9b1f-ee5427a949c9-removebg-preview.png",
    description: defaultDescription,
  },

  {
    name: "Vacuum Cleaner",
    price: 299.99,
    imgUrl: "/imgs/10-720x720.png",
    description:
      "Meet the Xiaomi Mi Robot Vacuum, your intelligent home cleaning assistant. This sleek, white robotic vacuum features advanced mapping and navigation technology for efficient and thorough cleaning. Equipped with powerful suction and multiple cleaning modes, it tackles dust, dirt, and debris on various surfaces with ease. The Mi Robot Vacuum is also Wi-Fi enabled, allowing you to control it remotely via a smartphone app.",
  },

  {
    name: "TV",
    price: 157.45,
    imgUrl: "/imgs/N5000-Series-5-black1.jpg",
    description: defaultDescription,
  },

  {
    name: "Portable Speaker",
    price: 199.99,
    imgUrl: "/imgs/ac9dd090-3f71-454b-aded-9cec2af981d2.webp",
    description:
      "Experience music like never before with the JBL Pulse 4, featuring powerful 360-degree sound and a stunning LED light show. This waterproof (IPX7) speaker is perfect for any environment, from poolside parties to cozy indoor gatherings. Enjoy up to 12 hours of continuous playtime with wireless Bluetooth streaming. Elevate your audio and visual experience with the JBL Pulse 4.",
  },
].map((item, i) => ({ ...item, id: i + 1, searchTerm: "" }));

export default db;
