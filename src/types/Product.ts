export interface ProductProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  amount?: number;
  currency?: string;
  description?: string;
}
