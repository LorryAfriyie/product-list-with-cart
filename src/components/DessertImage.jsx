/* eslint-disable react/prop-types */
import { useEffect } from "react";

export function DesertImage({ image }) {
  useEffect(() => {
    console.log(image.desktop);
  });
  return (
    <div className="desert-image">
      <img src={image.desktop} alt={image.desktop} srcset="" />
    </div>
  );
}
