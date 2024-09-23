/* eslint-disable react/prop-types */
export function DesertInfo({ name, category, price }) {
  return (
    <div className="dessert-info">
      <p className="dessert-info__category">{category}</p>
      <p className="dessert-info__name">{name}</p>
      <p className="dessert-info__price">{price}</p>
    </div>
  );
}
