import { DesertInfo } from "./DessertInfo";
import { DesertImage } from "./DessertImage";
import { AddToCartBtn } from "./Button";
import { useState, useEffect } from "react";

export function DessertCard({
  image,
  name,
  category,
  price,
  dessert,
  id,
  changes,
}) {
  const [quantity, setQuantity] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  function handleQuantity(data) {
    setQuantity(data);
    changes(quantity, id);
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
      <AddToCartBtn
        handleQuantity={handleQuantity}
        handleIsSubmit={handleIsSubmit}
        quantity={quantity}
      />
      <DesertInfo name={name} category={category} price={price} />
    </div>
  );
}
