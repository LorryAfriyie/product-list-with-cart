import { DesertInfo } from "./DessertInfo";
import { DesertImage } from "./DessertImage";
import { AddToCartBtn } from "./button";
import { useState, useEffect } from "react";

export function DessertCard({ image, name, category, price }) {
  const [quantity, setQuantity] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [dessertData, setDessertData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: 0,
  });

  function handleQuantity(data) {
    setQuantity(data);
  }

  function handleIsSubmit(data) {
    setIsSubmit(data);
  }

  useEffect(() => {
    if (isSubmit) {
      //console.log(`${name} ${quantity}`);
      setDessertData({
        name: name,
        category: category,
        price: price,
        quantity: quantity,
      });
    }
  }, [isSubmit, name, quantity, category, price]);

  return (
    <div className="dessert-card">
      <p>{isSubmit ? "1" : "0"}</p>
      <p>{dessertData.quantity}</p>
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
