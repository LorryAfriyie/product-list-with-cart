import { DesertInfo } from "./DessertInfo";
import { DesertImage } from "./DessertImage";
import { AddToCartBtn } from "./button";
import { useState } from "react";

export function DessertCard({ image, name, category, price }) {
  const [quantity, setQuantity] = useState(0);
  
  return (
    <div className="dessert-card">
      <DesertImage image={image} />
      <AddToCartBtn quantity={quantity} setQuantity={setQuantity} />
      <DesertInfo name={name} category={category} price={price} />
    </div>
  );
}
