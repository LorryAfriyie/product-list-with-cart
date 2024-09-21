import { DesertInfo } from "./DessertInfo";
import { DesertImage } from "./DessertImage";

export function DessertCard({ image, name, category, price }) {
  return (
    <div className="dessert-card">
      <DesertImage image={image} />
      <DesertInfo name={name} category={category} price={price} />
    </div>
  );
}
