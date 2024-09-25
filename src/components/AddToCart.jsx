import emptyCart from "../assets/images/illustration-empty-cart.svg";

export function AddToCart() {
  return (
    <div className="cart">
      <div className="cart__container">
        <h2 className="cart__heading">Your Cart</h2>

        <img src={emptyCart} alt="" className="empty-cart" />

        <p>Your added items will appear here</p>
      </div>
    </div>
  );
}
