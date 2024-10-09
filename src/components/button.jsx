import { useRef, useEffect } from "react";
import cart from "../assets/images/icon-add-to-cart.svg";
import increase from "../assets/images/icon-increment-quantity.svg";
import decrease from "../assets/images/icon-decrement-quantity.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

function AddToCartBtn({ id, handleIsSubmit }) {
  const { addDessert } = useShoppingCart();
  const button = useRef(null);

  function test(id) {
    handleIsSubmit(true);
    addDessert(id);
  }

  useEffect(() => {
    button.current.addEventListener("click", () => {
      test(id);
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
  const { increaseQuantity, decreaseQuantity, getQuantity, showID } =
    useShoppingCart();
  const quan = getQuantity(id);

  const quantityBtn = useRef(null);

  const increaseQuantityNum = useRef(null),
    decreaseQuantityNum = useRef(null);

  useEffect(() => {
    quantityBtn.current.style.backgroundColor = "var(--clr-red)";
    showID(id);
    increaseQuantityNum.current.addEventListener("click", () => {
      increaseQuantity(id);
    });

    decreaseQuantityNum.current.addEventListener("click", () => {
      decreaseQuantity(id);
    });
  }, []);

  return (
    <div className="cart-btn-container">
      <div className="cart-btn" ref={quantityBtn}>
        <div className="quantity-control">
          <button className="decrement" ref={increaseQuantityNum}>
            <img src={decrease} alt={decrease} />
          </button>

          <span className="num-of-item">{getQuantity()}</span>

          <button className="increment" ref={decreaseQuantityNum}>
            <img src={increase} alt={increase} />
          </button>
        </div>
      </div>
    </div>
  );
}

export { AddToCartBtn, QuantityButton };
