import { ImageProps } from "../types/Image";
import { ProductProps } from "../types/Product";
import { getImagePropsById, imageData } from "./imageData";
import database from "./database.json";

let defaultDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum mattis risus id viverra. Vivamus pellentesque massa erat, ac finibus sapien pretium in. Sed consequat eros orci, in porta diam interdum non. Morbi lacus magna, dapibus aliquet purus ac, mollis fringilla ex. Donec rutrum mi at nibh venenatis bibendum. Fusce luctus, nibh non bibendum rutrum, quam nulla pulvinar massa, quis dapibus justo tellus id sem. Nullam ut ante sit amet urna congue gravida non ac mauris. In elementum lorem sit amet velit hendrerit elementum. Nullam pulvinar, ligula eget sagittis vestibulum, leo nulla laoreet nisi, ut interdum sapien odio ut ex. Suspendisse non nibh non massa imperdiet scelerisque. Aenean vitae sapien sit amet mi viverra ultrices ac in mi. Maecenas consectetur varius mi at elementum. Suspendisse potenti.";

const dbOld: any[] = [
  {
    name: "Apple MacBook Air",
    price: 999,
    oldPrice: 1299,
    description:
      "Discover the Apple MacBook Air, the epitome of sleek design and powerful performance. This ultra-thin, lightweight laptop features a stunning Retina display and is powered by the latest M1 chip, delivering incredible speed and efficiency. With its all-day battery life, backlit Magic Keyboard, and Touch ID, the MacBook Air is perfect for both work and play.",
  },
  {
    name: "Keyboard",
    price: 99.99,

    description:
      "Elevate your typing experience with the Logitech MX Keys Advanced Wireless Illuminated Keyboard. Designed for efficiency, stability, and precision, this keyboard features smart illumination that adapts to your environment, a comfortable key layout, and seamless connectivity options. Ideal for both professional and personal use, it ensures effortless productivity and a premium typing experience.",
  },
  {
    name: "PC speakers",
    price: 109.99,
    description:
      "Unleash immersive sound with the Hecate G2000 Gaming Speakers. Designed for gamers and audiophiles alike, these striking red speakers deliver powerful audio with deep bass and crystal-clear highs. Their modern, edgy design fits perfectly in any gaming setup, while the convenient control panel allows easy adjustments to volume and sound modes.",
  },

  {
    name: "Watch",
    price: 799.0,
    description:
      "Experience the pinnacle of wearable technology with the Apple Watch Ultra. This advanced smartwatch features a robust titanium case, a vibrant always-on Retina display, and a rugged Alpine Loop band for optimal comfort and durability. Packed with innovative health and fitness tracking capabilities, GPS navigation, and cellular connectivity, it is the perfect companion for your active lifestyle.",
  },
  {
    name: "Tablet",
    price: 699.99,
    oldPrice: 720.99,
    description:
      "Discover the ultimate in versatility and performance with the Samsung Galaxy Tab S8. This sleek and powerful tablet features a stunning 11-inch display, the latest Snapdragon processor, and an ultra-slim design. Ideal for both work and play, it includes the S Pen for precise input and creativity on the go. With its long-lasting battery and powerful performance, the Galaxy Tab S8 is your perfect companion for productivity and entertainment.",
  },
  {
    name: "Monitor",
    price: 1299.99,
    oldPrice: 1499.99,
    description:
      "Elevate your gaming experience with the Philips Momentum Curved Gaming Monitor. Featuring a stunning 49-inch UltraWide screen with 144Hz refresh rate and 1ms response time, this monitor ensures immersive and fluid gameplay. Its curved design enhances your field of view, making every game feel more realistic. Equipped with Adaptive-Sync technology, it eliminates screen tearing and delivers smooth, lag-free visuals.",
  },
  {
    name: "Scooter",
    price: 420.0,
    description: defaultDescription,
  },
  {
    name: "Console",
    price: 420.0,
    description: defaultDescription,
  },
  {
    name: "Headphones",
    price: 15.0,
    description: defaultDescription,
  },

  {
    name: "Vacuum Cleaner",
    price: 299.99,
    description:
      "Meet the Xiaomi Mi Robot Vacuum, your intelligent home cleaning assistant. This sleek, white robotic vacuum features advanced mapping and navigation technology for efficient and thorough cleaning. Equipped with powerful suction and multiple cleaning modes, it tackles dust, dirt, and debris on various surfaces with ease. The Mi Robot Vacuum is also Wi-Fi enabled, allowing you to control it remotely via a smartphone app.",
  },

  {
    name: "TV",
    price: 157.45,
    description: defaultDescription,
  },

  {
    name: "Portable Speaker",
    price: 199.99,
    description:
      "Experience music like never before with the JBL Pulse 4, featuring powerful 360-degree sound and a stunning LED light show. This waterproof (IPX7) speaker is perfect for any environment, from poolside parties to cozy indoor gatherings. Enjoy up to 12 hours of continuous playtime with wireless Bluetooth streaming. Elevate your audio and visual experience with the JBL Pulse 4.",
  },
].map((item, i) => {
  const imgData = getImagePropsById(i + 1, imageData);
  const { id, ...otherProps } = imgData!;
  return {
    ...item,
    id: i + 1,
    searchTerm: "",
    image: otherProps,
  };
});

const db: ProductProps[] = database as ProductProps[];
export default db;
