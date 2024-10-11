import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function getQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 1;
  }

  function increaseQuantity(id) {
    setCartItems((currentItem) => {
      return currentItem.map((item) => {
        if (item.id === id) {
          console.log(id);
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  }

  function decreaseQuantity(id) {
    setCartItems((currentItem) => {
      return currentItem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        } else {
          return item;
        }
      });
    });
  }

  function addDessert(dessertName, dessertCategory, dessertPrice, id) {
    setCartItems([
      ...cartItems,
      {
        name: dessertName,
        category: dessertCategory,
        price: dessertPrice,
        quantity: 1,
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
