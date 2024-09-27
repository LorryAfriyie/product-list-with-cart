import { DesertInfo } from "./DessertInfo";
import { DesertImage } from "./DessertImage";
import { AddToCartBtn } from "./button";
import { useState, useEffect } from "react";

export function DessertCard({
  image,
  name,
  category,
  price,
}) {
  const [quantity, setQuantity] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [dessertData, setDessertData] = useState({
    name: "",
    category: "",
    price: "",
  });

  function handleQuantity(data) {
    setQuantity(data);
  }

  function handleIsSubmit(data) {
    setIsSubmit(data);
  }

  useEffect(() => {
    if (isSubmit) {
      setDessertData({ name: name, category: category, price: price });
    }
  }, [isSubmit, name, category, price]);

  return (
    <div className="dessert-card">
      <DesertImage image={image} />
      <AddToCartBtn
        quantity={quantity}
        handleQuantity={handleQuantity}
        handleIsSubmit={handleIsSubmit}
      />
      <DesertInfo name={name} category={category} price={price} />
    </div>
  );
}
