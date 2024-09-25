/* eslint-disable react/prop-types */
export function DesertInfo({ name, category, price }) {
  const usDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  return (
    <div className="dessert-info">
      <p className="dessert-info__category">{category}</p>
      <p className="dessert-info__name">{name}</p>
      <p className="dessert-info__price">{usDollar.format(price)}</p>
    </div>
  );
}
