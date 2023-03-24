import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayAutos from "../json/arrayAutos.json";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id
            ? arrayAutos.filter((item) => item.id === parseInt(id))
            : arrayAutos
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
        <ItemDetail item={item} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;
