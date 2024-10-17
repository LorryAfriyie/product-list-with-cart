import { createContext, useContext, useState } from "react";
import dessertItems from "../../data/data.json";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [removeItem, setRemoveItem] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);

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

  function addDessert(dessertName, dessertCategory, dessertPrice, image, id) {
    setCartItems([
      {
        name: dessertName,
        category: dessertCategory,
        price: dessertPrice,
        image: image,
        quantity: 1,
        id: id,
      },
      ...cartItems,
    ]);
  }

  function clearDessert() {
    setCartItems([]);
  }

  function removeDessert(id) {
    setCartItems((cartItems) => {
      setRemoveItem(true);
      return cartItems.filter((item) => item.id != id);
    });
  }

  function cartTotal(cartItems) {
    return cartItems.reduce((total, cartItem) => {
      const dessert = dessertItems.find((item) => item.name === cartItem.name);
      return total + (dessert?.price || 0) * cartItem.quantity;
    }, 0);
  }

  function modalToggle(value) {
    setShowModal(value);
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
        cartTotal,
        modalToggle,
        showModal,
        total,
        clearDessert,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
