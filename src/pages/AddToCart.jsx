import emptyCart from "../assets/images/illustration-empty-cart.svg";
import closeBtn from "../assets/images/icon-remove-item.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormat";

export function AddToCart() {
  const { cartItems, calculateDessertQuantityTotal, removeDessert } =
    useShoppingCart();

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
                <div className="cart__border-bottom"></div>
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
      </div>
    </div>
  );
}
