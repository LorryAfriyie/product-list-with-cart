import { useEffect, useRef } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormat";
import orderConfirmed from "../assets/images/icon-order-confirmed.svg";

export function Modal() {
  const {
    showModal,
    modalToggle,
    cartItems,
    calculateDessertQuantityTotal,
    cartTotal,
  } = useShoppingCart();

  const modal = useRef(null);

  useEffect(() => {
    if (showModal) {
      modal.current.style.display = "block";
      modalToggle(false);
    }

    modal.current.addEventListener("click", function () {
      modal.current.style.display = "none";
      modalToggle(false);
    });
  });
  return (
    <div className="modal" ref={modal}>
      <div className="modal__content">
        <img src={orderConfirmed} alt={orderConfirmed} />
        <h1 className="modal__heading">Order Confirmed</h1>
        <p className="modal__sub-text">We hope you enjoy your food!</p>

        <div className="modal__dessert-list">
          {cartItems.map((x, index) => {
            return (
              <div className="dessert-items" key={index}>
                <div className="dessert-items-info">
                  <img src={x.image.desktop} alt={x.image} />

                  <div>
                    <p className="dessert-name">{x.name}</p>
                    <p className="dessert">
                      {x.quantity}{" "}
                      <span className="dessert-price">
                        @ {formatCurrency(x.price)}
                      </span>
                    </p>
                  </div>
                </div>

                <p>{formatCurrency(calculateDessertQuantityTotal(x.id))}</p>
              </div>
            );
          })}

          <div className="dessert-total">
            <span>Order Total</span>
            <span>{formatCurrency(cartTotal(cartItems))}</span>
          </div>

          <div className="new-order-btn">
            <button>Start new order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
