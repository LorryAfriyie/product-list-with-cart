/* eslint-disable react/prop-types */

export function DesertImage({ image }) {
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
