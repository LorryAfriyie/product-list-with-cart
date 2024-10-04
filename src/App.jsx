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

  function handleQuantityChanges(data2, id) {
    setData(
      data2.map((x) => {
        if (x.id === id) return console.log(data2);
        else return x;
      }),
    );
  }

  function decreaseQuantity(data) {}

  useEffect(() => {
    console.log(data);
  });

  return (
    <div className="app">
      <DessertGrid
        handleDessertData={handleDessertData}
        quantityChanges={handleQuantityChanges}
      />
      <AddToCart dessert={data} />
    </div>
  );
}

export default App;
