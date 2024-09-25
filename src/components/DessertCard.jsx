import { DesertInfo } from "./DessertInfo";
import { DesertImage } from "./DessertImage";
import { AddToCartBtn } from "./button";

export function DessertCard({ image, name, category, price }) {
  return (
    <div className="dessert-card">
      <DesertImage image={image} />
      <AddToCartBtn />
      <DesertInfo name={name} category={category} price={price} />
    </div>
  );
}
