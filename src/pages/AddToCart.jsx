import emptyCart from "../assets/images/illustration-empty-cart.svg";
import closeBtn from "../assets/images/icon-remove-item.svg";
import carbon from "../assets/images/icon-carbon-neutral.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormat";

export function AddToCart() {
  const {
    cartItems,
    calculateDessertQuantityTotal,
    removeDessert,
    cartTotal,
    modalToggle,
  } = useShoppingCart();

  return (
    <div className="cart">
      <div className="cart__container">
        <h2 className="cart__heading">Your Cart {`(${cartItems.length})`}</h2>

        {cartItems.length === 0 && (
          <>
            <img src={emptyCart} alt="" className="empty-cart" />
            <p className="empty-cart-msg">Your added items will appear here</p>
          </>
        )}

        {cartItems.map((items) => {
          return (
            <div key={items.id} className="cart__cart-items">
              <div className="dessert-detail">
                <p className="cart__dessert-name">{items.name}</p>
                <div className="cart__calculation">
                  <p className="cart__dessert-quantity-count">
                    {items.quantity}x
                  </p>

                  <p className="cart__dessert-price">{`@ ${formatCurrency(
                    items.price,
                  )}`}</p>

                  <p className="cart__dessert-total-price">
                    {formatCurrency(calculateDessertQuantityTotal(items.id))}
                  </p>
                </div>
              </div>

              <div className="remove-dessert">
                <button
                  className="cart__remove-item"
                  onClick={() => removeDessert(items.id)}
                >
                  <img src={closeBtn} alt={closeBtn} />
                </button>
              </div>
            </div>
          );
        })}

        <div>
          {cartItems.length > 0 && (
            <div className="cart__total">
              <span>Order Total</span>

              <span className="total-display">
                {formatCurrency(cartTotal(cartItems))}
              </span>
            </div>
          )}

          {cartItems.length > 0 && (
            <>
              <div className="cart__carbon">
                <img src={carbon} alt={carbon} />
                <small>
                  This is a <span>carbon-neutral</span> delivery
                </small>
              </div>

              <div className="cart__order-btn">
                <button onClick={() => modalToggle(true)}>Confirm Order</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
