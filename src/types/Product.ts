import { ImageProps } from "./Image";
export interface ProductProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  amount?: number;
  currency?: string;
  description?: string;
  searchTerm: string;
  image: ImageProps;
}
