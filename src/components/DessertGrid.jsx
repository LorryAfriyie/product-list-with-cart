import { useEffect, useState } from "react";
import { DesertImage } from "./DessertImage";
import { DesertInfo } from "./DessertInfo";

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
    <>
      <h1>Dessert</h1>
      {jsonData.length === 0 && <p>No dessert data available</p>}

      {jsonData.map((x, index) => {
        return (
          <div className="desert-container" key={index}>
            <DesertImage image={x.image} />
            <DesertInfo name={x.name} category={x.category} price={x.price} />
          </div>
        );
      })}
    </>
  );
}
