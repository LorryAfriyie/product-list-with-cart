import { DessertGrid } from "./components/DessertGrid";
import { AddToCart } from "./components/AddToCart";
import { useEffect, useState } from "react";

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
    setData(
      data.map((x) => {
        if (x.id === id) return { ...data, quantity: dessertQuantity };
        else
          return {
            ...data,
            name: dessertName,
            category: dessertCategory,
            price: dessertPrice,
            quantity: dessertQuantity,
          };
      }),
    );
  }

  useEffect(() => {
    console.log(data);
  });

  return (
    <div className="app">
      <DessertGrid handleDessertData={handleDessertData} />
      <AddToCart dessert={data} />
    </div>
  );
}

export default App;
