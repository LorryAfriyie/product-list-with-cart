import { useRef, useEffect } from "react";
import cart from "../assets/images/icon-add-to-cart.svg";
import increase from "../assets/images/icon-increment-quantity.svg";
import decrease from "../assets/images/icon-decrement-quantity.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

function AddToCartBtn(props) {
  const { id, name, category, price } = props;
  const { addDessert } = useShoppingCart();
  const button = useRef(null);

  useEffect(() => {
    button.current.addEventListener("click", () => {
      addDessert(name, category, price, id);
    });
  });

  return (
    <div className="cart-btn-container">
      <button className="cart-btn" ref={button}>
        <span className="icon">
          <img src={cart} alt={cart} />
        </span>
        <span className="text">Add to cart</span>
      </button>
    </div>
  );
}

function QuantityButton({ id }) {
  const { increaseQuantity, decreaseQuantity, getQuantity } = useShoppingCart();

  const quantityBtn = useRef(null);

  useEffect(() => {
    quantityBtn.current.style.backgroundColor = "var(--clr-red)";
  }, []);

  return (
    <div className="cart-btn-container">
      <div className="cart-btn" ref={quantityBtn}>
        <div className="quantity-control">
          <button className="decrement" onClick={() => decreaseQuantity(id)}>
            <img src={decrease} alt={decrease} />
          </button>

          <span className="num-of-item">{getQuantity(id)}</span>

          <button className="increment" onClick={() => increaseQuantity(id)}>
            <img src={increase} alt={increase} />
          </button>
        </div>
      </div>
    </div>
  );
}

export { AddToCartBtn, QuantityButton };
