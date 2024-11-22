import { DessertCard } from "./DessertCard";
import jsonData from "../data/data.json";

export function DessertGrid() {

  return (
    <div className="dessert-grid">
      <h1>Desserts</h1>
      {jsonData.length === 0 && <p>No dessert data available</p>}

      <div className="dessert-container">
        {jsonData.map((x, index) => {
          return (
            <div key={index}>
              <DessertCard
                image={x.image}
                name={x.name}
                category={x.category}
                price={x.price}
                id={index + 1}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
