import { DesertInfo } from "./DessertInfo";
import { DesertImage } from "./DessertImage";
import { AddToCartBtn, QuantityButton } from "../components/Button";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function DessertCard(props) {
  const { image, name, category, price, id } = props;

  const { getQuantity } = useShoppingCart();

  const quantity = getQuantity(id);

  return (
    <div className="dessert-card">
      <DesertImage image={image} />

      {quantity > 0 ? (
        <QuantityButton id={id} />
      ) : (
        <AddToCartBtn
          id={id}
          name={name}
          category={category}
          price={price}
          image={image}
        />
      )}

      <DesertInfo name={name} category={category} price={price} />
    </div>
  );
}
