import { DesertInfo } from "./DessertInfo";
import { DesertImage } from "./DessertImage";
import { AddToCartBtn, QuantityButton } from "../components/Button";
import { useState, useEffect } from "react";

export function DessertCard(props) {
  const { image, name, category, price, dessert, id } = props;

  const [quantity, setQuantity] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  function handleQuantity(data) {
    setQuantity(data);
    console.log(id);
  }

  function handleIsSubmit(data) {
    setIsSubmit(data);
  }

  useEffect(() => {
    if (isSubmit) {
      dessert(name, category, price, quantity, id);
    }
  }, [isSubmit, name, quantity, category, price]);

  return (
    <div className="dessert-card">
      <DesertImage image={image} />
      {isSubmit ? (
        <QuantityButton
          quantity={quantity}
          handleQuantity={handleQuantity}
          id={id}
        />
      ) : (
        <AddToCartBtn id={id} handleIsSubmit={handleIsSubmit} />
      )}
      <DesertInfo name={name} category={category} price={price} />
    </div>
  );
}
