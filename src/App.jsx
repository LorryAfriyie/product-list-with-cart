import { DessertGrid } from "./pages/DessertGrid";
import { AddToCart } from "./pages/AddToCart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ModalProvider } from "./context/ModalContext";
import { Modal } from "./components/Modal";

function App() {
  return (
    <div className="app">
      <ShoppingCartProvider>
        <DessertGrid />

        <ModalProvider>
          <AddToCart />
          <Modal />
        </ModalProvider>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
