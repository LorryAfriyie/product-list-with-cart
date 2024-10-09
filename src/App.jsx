import { DessertGrid } from "./pages/DessertGrid";
import { AddToCart } from "./pages/AddToCart";
import { useState } from "react";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  const [data, setData] = useState([
    {
      name: "",
      category: "",
      price: 0,
      quantity: 0,
      id: 0,
    },
  ]);

  function handleDessertData(
    dessertName,
    dessertCategory,
    dessertPrice,
    dessertQuantity,
    id,
  ) {
    setData([
      ...data,
      {
        name: dessertName,
        category: dessertCategory,
        price: dessertPrice,
        quantity: dessertQuantity,
        id: id,
      },
    ]);
  }

  return (
    <div className="app">
      <ShoppingCartProvider>
        <DessertGrid />
        <AddToCart />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
