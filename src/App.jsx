import { DessertGrid } from "./pages/DessertGrid";
import { AddToCart } from "./pages/AddToCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
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
