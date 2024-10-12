import { DesertInfo } from "./DessertInfo";
import { DesertImage } from "./DessertImage";
import { AddToCartBtn, QuantityButton } from "../components/Button";
import { useEffect, useState } from "react";

export function DessertCard(props) {
  const { image, name, category, price, id } = props;

  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(isSubmit);
  });

  return (
    <div className="dessert-card">
      <DesertImage image={image} />

      {isSubmit && <QuantityButton id={id} />}

      {!isSubmit && (
        <AddToCartBtn
          id={id}
          handleIsSubmit={setIsSubmit}
          name={name}
          category={category}
          price={price}
        />
      )}

      <DesertInfo name={name} category={category} price={price} />
    </div>
  );
}
