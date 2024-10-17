import { useRef, useEffect } from "react";
import cart from "../assets/images/icon-add-to-cart.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

function AddToCartBtn(props) {
  const { id, name, category, price, image } = props;
  const { addDessert } = useShoppingCart();
  const button = useRef(null);

  useEffect(() => {
    button.current.addEventListener("click", () => {
      addDessert(name, category, price, image, id);
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </button>

          <span className="num-of-item">{getQuantity(id)}</span>

          <button className="increment" onClick={() => increaseQuantity(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="#fff"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export { AddToCartBtn, QuantityButton };
