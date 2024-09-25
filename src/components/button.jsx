import { useState, useRef } from "react";
import cart from "../assets/images/icon-add-to-cart.svg";
import increase from "../assets/images/icon-increment-quantity.svg";
import decrease from "../assets/images/icon-decrement-quantity.svg";

function AddToCartBtn() {
  const [numOfItem, setNumOfItem] = useState(false);
  const button = useRef(null);

  function test() {
    setNumOfItem(true);

    button.current.style.backgroundColor = "var(--clr-red)";
  }
  return (
    <div className="cart-btn-container">
      <button className="cart-btn" onClick={test} ref={button}>
        {numOfItem ? (
          <>
            <span className="decrement">
              <img src={decrease} alt={decrease} />
            </span>
            <span className="num-of-item">0</span>
            <span className="increment">
              <img src={increase} alt={increase} />
            </span>
          </>
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
