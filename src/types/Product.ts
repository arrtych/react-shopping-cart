export interface ProductProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  imgUrl: string;
  amount?: number;
  currency?: string;
  description?: string;
  searchTerm: string; //todo: removeafter
}
