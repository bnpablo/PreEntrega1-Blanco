import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayAutos from "../json/arrayAutos.json";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id ? arrayAutos.filter(item => item.category === id) : arrayAutos
        );
      });
    });

    promise.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <ItemList item={item} />
      </div>
    </div>
  );
}

export default ItemListContainer;
