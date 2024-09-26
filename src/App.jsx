import { DessertGrid } from "./components/DessertGrid";
import { AddToCart } from "./components/AddToCart";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <DessertGrid />
      <AddToCart />
    </div>
  );
}

export default App;
