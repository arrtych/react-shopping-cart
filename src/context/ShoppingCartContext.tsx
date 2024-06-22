import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import StoreItem, { StoreItemProps } from "../components/StoreItem";

type ShoppingCartContext = {
  // openCart: () => void
  // closeCart: () => void
  getItemAmount: (id: number) => number;
  increaseItemAmount: (item: StoreItemProps) => void;
  items: StoreItemProps[];
  addToCart: (item: StoreItemProps) => void;
  removeFromCart: (item: StoreItemProps) => void;
  getTotalAmount: () => number;

  decreaseCartAmount: (item: StoreItemProps) => void; //todo: remove id
  // cartQuantity: number
  // cartItems: CartItem[]
};

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const ShoppingCartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<StoreItemProps[]>([]);

  const [loading, setLoading] = useState(false);

  function getItemAmount(id: number) {
    return items.find((item) => item.id === id)?.amount || 0;
  }

  function increaseItemAmount(storeItem: StoreItemProps) {
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

  function addToCart(item: StoreItemProps) {
    setItems((prevItems) => {
      return [...prevItems, { ...item, amount: 1 }];
    });
  }

  function removeFromCart(item: StoreItemProps) {
    setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  }

  function decreaseCartAmount(storeItem: StoreItemProps) {
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

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        getItemAmount,
        increaseItemAmount,
        decreaseCartAmount,
        addToCart,
        removeFromCart,
        getTotalAmount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingContext = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("context error");
  }
  return context;
};
