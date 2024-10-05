import { useRef, useEffect } from "react";
import cart from "../assets/images/icon-add-to-cart.svg";
import increase from "../assets/images/icon-increment-quantity.svg";
import decrease from "../assets/images/icon-decrement-quantity.svg";

function AddToCartBtn({ handleIsSubmit }) {
  const button = useRef(null);

  function test() {
    handleIsSubmit(true);
  }

  return (
    <div className="cart-btn-container">
      <button className="cart-btn" onClick={test} ref={button}>
        <span className="icon">
          <img src={cart} alt={cart} />
        </span>
        <span className="text">Add to cart</span>
      </button>
    </div>
  );
}

function QuantityButton({ quantity, handleQuantity }) {
  function increaseQuantity() {
    if (quantity >= 0) handleQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    if (quantity != 0) handleQuantity((prev) => prev - 1);
  }

  const quantityBtn = useRef(null);

  useEffect(() => {
    quantityBtn.current.style.backgroundColor = "var(--clr-red)";
  });

  return (
    <div className="cart-btn-container">
      <div className="cart-btn" ref={quantityBtn}>
        <div className="quantity-control">
          <span className="decrement" onClick={decreaseQuantity} id="wow">
            <img src={decrease} alt={decrease} />
          </span>

          <span className="num-of-item">{quantity}</span>

          <span className="increment" onClick={increaseQuantity}>
            <img src={increase} alt={increase} />
          </span>
        </div>
      </div>
    </div>
  );
}

export { AddToCartBtn, QuantityButton };
