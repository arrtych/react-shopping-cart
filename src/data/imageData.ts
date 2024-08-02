import { ImageProps } from "../types/Image";

export const imageData: ImageProps[] = [
  {
    id: 1,
    width: 1264,
    height: 764,
    url: "/imgs/m3-intro-image.png",
  },
  {
    id: 2,
    width: 1898,
    height: 804,
    url: "/imgs/keyboard-kb900-black-gallery-1.avif",
  },
  {
    id: 3,
    width: 1800,
    height: 1800,
    url: "/imgs/G2000_Speaker_Product_Picture_red_1.webp",
  },
  {
    id: 4,
    width: 600,
    height: 1000,
    url: "/imgs/AW_Ultra2_49mm_TI_Alpine_indigo-full-product-front-600.png",
  },
  {
    id: 5,
    width: 1920,
    height: 1920,
    url: "/imgs/samsung-galaxy-tab-s8-tahvelarvuti-hall-eest-tagant.png",
  },
  {
    id: 6,
    width: 700,
    height: 700,
    url: "/imgs/7aab240fb56a4ad69ef5b012005e2f61.webp",
  },
  {
    id: 7,
    width: 700,
    height: 800,
    url: "/imgs/scooter1.webp",
  },
  {
    id: 8,
    width: 1200,
    height: 630,
    url: "/imgs/ps5-buy-now-product-thumbnail-01-en-18mar22.webp",
  },
  {
    id: 9,
    width: 488,
    height: 488,
    url: "/imgs/GUEST_ae460959-e23b-4c7b-9b1f-ee5427a949c9-removebg-preview.png",
  },
  {
    id: 10,
    width: 500,
    height: 500,
    url: "/imgs/cleaner.png",
  },
  {
    id: 11,
    width: 535,
    height: 467,
    url: "/imgs/tv.png",
  },
  {
    id: 12,
    width: 700,
    height: 700,
    url: "/imgs/ac9dd090-3f71-454b-aded-9cec2af981d2.webp",
  },
];

export function getImagePropsById(
  id: number,
  data: ImageProps[]
): ImageProps | undefined {
  return data.find((item) => item.id === id);
}
