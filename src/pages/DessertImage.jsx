/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";

export const DesertImage = (props) => {
  const { image, border } = props;
  const dessertBorder = useRef(null);

  useEffect(() => {
    if (border > 0) dessertBorder.current.style.border = "2px solid red";
    else dessertBorder.current.style.border = "none";
  });
  return (
    <>
      <picture>
        <source media="(min-width: 960px)" srcSet={image.desktop} />
        <source media="(min-width: 600px)" srcSet={image.tablet} />
        <source srcSet={image.mobile} />
        <img
          src={image.desktop}
          alt={image.desktop}
          className="dessert-img"
          ref={dessertBorder}
        />
      </picture>
    </>
  );
};
