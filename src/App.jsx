import { DessertGrid } from "./components/DessertGrid";
import { AddToCart } from "./components/AddToCart";
import { useState, useEffect } from "react";

function App() {


  return (
    <div className="app">
      <DessertGrid />
      <AddToCart />
    </div>
  );
}

export default App;
