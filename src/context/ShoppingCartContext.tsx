import { createContext, useContext, useState, ReactNode } from "react";
import { ProductProps } from "../types/Product";

type ShoppingCartContext = {
  getItemAmount: (id: number) => number;
  increaseItemAmount: (item: ProductProps) => void;
  decreaseItemAmount: (item: ProductProps) => void;
  items: ProductProps[];
  addToCart: (item: ProductProps) => void;
  removeFromCart: (item: ProductProps) => void;
  getTotalAmount: () => number;
  getItemTotalAmount: (id: number) => number;
};

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const ShoppingCartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<ProductProps[]>([]);

  const [loading, setLoading] = useState(false);

  function getItemAmount(id: number) {
    return items.find((item) => item.id === id)?.amount || 0;
  }

  function increaseItemAmount(storeItem: ProductProps) {
    setItems((prevItems) => {
      if (prevItems.find((item) => item.id === storeItem.id) == null) {
        return [...prevItems, { ...storeItem, amount: 1 }];
      } else {
        return prevItems.map((item) => {
          if (item.id == storeItem.id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        });
      }
    });
  }

  function addToCart(item: ProductProps) {
    setItems((prevItems) => {
      return [...prevItems, { ...item, amount: 1 }];
    });
  }

  function removeFromCart(item: ProductProps) {
    setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  }

  function decreaseItemAmount(storeItem: ProductProps) {
    setItems((prevItems) => {
      if (prevItems.find((item) => item.id === storeItem.id)?.amount == 1) {
        return prevItems.filter((item) => item.id !== storeItem.id);
      } else {
        return prevItems.map((item) => {
          if (item.id == storeItem.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
      }
    });
  }

  function getTotalAmount() {
    const amounts = items.map((item) => item.amount);
    const totalAmount = amounts.reduce(
      (accumulator, currentAmount) => accumulator + currentAmount,
      0
    );

    return totalAmount;
  }

  /**
   * Method which calculates total price of item by price and amount values
   *
   * @param id - The id of the product
   * @returns number - The total price of the item
   */
  function getItemTotalAmount(id: number): number {
    const product = items.find((p) => p.id === id);
    return product ? product.price * product.amount : 0;
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        getItemTotalAmount,
        getItemAmount,
        increaseItemAmount,
        decreaseItemAmount,
        addToCart,
        removeFromCart,
        getTotalAmount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

/**
 *
 * @returns
 */
export const useShoppingContext = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("context error");
  }
  return context;
};
