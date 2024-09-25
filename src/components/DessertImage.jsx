/* eslint-disable react/prop-types */
import { useEffect } from "react";

export function DesertImage({ image }) {
  useEffect(() => {
    console.log(`Desktop: ${image.desktop}`);
    console.log(`Tablet: ${image.tablet}`);
    console.log(`Mobile: ${image.mobile}`);
  });
  return (
    <>
      <picture>
        <source media="(min-width: 960px)" srcSet={image.desktop} />
        <source media="(min-width: 600px)" srcSet={image.tablet} />
        <source srcSet={image.mobile} />
        <img src={image.desktop} alt={image.desktop} className="dessert-img" />
      </picture>
    </>
  );
}
