import { DessertGrid } from "./pages/DessertGrid";
import { AddToCart } from "./pages/AddToCart";
import { useEffect, useState } from "react";
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
    <ShoppingCartProvider>
      <div className="app">
        <DessertGrid
          handleDessertData={handleDessertData}
        />
        <AddToCart />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
