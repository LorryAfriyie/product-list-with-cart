import { useState, useRef } from "react";
import cart from "../assets/images/icon-add-to-cart.svg";
import increase from "../assets/images/icon-increment-quantity.svg";
import decrease from "../assets/images/icon-decrement-quantity.svg";

function AddToCartBtn({quantity, setQuantity}) {
  const [numOfItem, setNumOfItem] = useState(false);
  // const [quantity, setQuantity] = useState(0);

  const button = useRef(null);

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function decreaseQuantity() {
    setQuantity((prev) => prev - 1);
  }

  function test() {
    setNumOfItem(true);

    button.current.style.backgroundColor = "var(--clr-red)";
  }
  return (
    <div className="cart-btn-container">
      <button className="cart-btn" onClick={test} ref={button}>
        {numOfItem ? (
          <div className="quantity-control">
            <span className="decrement" onClick={decreaseQuantity}>
              <img src={decrease} alt={decrease} />
            </span>

            <span className="num-of-item">{quantity}</span>

            <span className="increment" onClick={increaseQuantity}>
              <img src={increase} alt={increase} />
            </span>
          </div>
        ) : (
          <>
            <span className="icon">
              <img src={cart} alt={cart} />
            </span>
            <span className="text">Add to cart</span>
          </>
        )}
      </button>
    </div>
  );
}

export { AddToCartBtn };
