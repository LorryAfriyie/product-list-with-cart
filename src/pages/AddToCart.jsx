import emptyCart from "../assets/images/illustration-empty-cart.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function AddToCart() {
  const { cartItems } = useShoppingCart();
  return (
    <div className="cart">
      <div className="cart__container">
        <h2 className="cart__heading">Your Cart</h2>

        <img src={emptyCart} alt="" className="empty-cart" />

        <p>Your added items will appear here</p>

        {cartItems.map((items) => {
          <div key={items.id}>
            <p>{items.name + " " + items.id}</p>
          </div>;
        })}
      </div>
    </div>
  );
}
