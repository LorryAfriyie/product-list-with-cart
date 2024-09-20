export function DesertInfo({ name, category, price }) {
  return (
    <div className="desert-info">
      <p>{name}</p>
      <p>{category}</p>
      <p>{price}</p>
    </div>
  );
}
