import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [removeItem, setRemoveItem] = useState(false);

  function getQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function calculateDessertQuantityTotal(id) {
    return cartItems.find((item) => item.id === id)?.price * getQuantity(id);
  }

  function increaseQuantity(id) {
    setCartItems((currentItem) => {
      return currentItem.map((item) => {
        if (item.id === id) {
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
      {
        name: dessertName,
        category: dessertCategory,
        price: dessertPrice,
        quantity: 1,
        id: id,
      },
      ...cartItems,
    ]);
  }

  function removeDessert(id) {
    setCartItems((cartItems) => {
      setRemoveItem(true);
      return cartItems.filter((item) => item.id != id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        addDessert,
        cartItems,
        calculateDessertQuantityTotal,
        removeDessert,
        removeItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
