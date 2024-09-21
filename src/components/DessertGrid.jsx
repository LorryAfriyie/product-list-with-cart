import { useEffect, useState } from "react";

import { DessertCard } from "./DessertCard";

export function DessertGrid() {
  const [jsonData, getJsonData] = useState([]);

  function getData() {
    fetch("../data/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        getJsonData(res);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="dessert-grid">
      <h1>Dessert</h1>
      {jsonData.length === 0 && <p>No dessert data available</p>}
      
      <div className="dessert-container">
        {jsonData.map((x, index) => {
          return (
            <DessertCard
              image={x.image}
              name={x.name}
              category={x.category}
              price={x.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
