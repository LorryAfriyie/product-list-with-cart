/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef } from "react";

export const DesertImage = forwardRef(({ image }, ref) => {
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
          ref={ref}
        />
      </picture>
    </>
  );
});
