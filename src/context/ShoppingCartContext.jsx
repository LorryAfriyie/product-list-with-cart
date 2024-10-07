import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function getQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id) {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null || "") {
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseQuantity(id) {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id)?.quantity === 0) {
        return [...cartItems, { id, quantity: 0 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function addDessert(
    dessertName,
    dessertCategory,
    dessertPrice,
    dessertQuantity,
    id,
  ) {
    setCartItems([
      ...cartItems,
      {
        name: dessertName,
        category: dessertCategory,
        quantity: dessertQuantity,
        price: dessertPrice,
        id: id,
      },
    ]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        addDessert,
        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
