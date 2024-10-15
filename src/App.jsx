import { DessertGrid } from "./pages/DessertGrid";
import { AddToCart } from "./pages/AddToCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Modal } from "./components/Modal";

function App() {
  return (
    <div className="app">
      <ShoppingCartProvider>
        <DessertGrid />
        <AddToCart />
        <Modal />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
