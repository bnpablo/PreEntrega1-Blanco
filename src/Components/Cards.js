import React from "react";
import ItemCount from "./ItemCount.js";
import { useState } from "react";

const styles = {
    width: '18rem'
}

export default function Card() {

    const [stock, setStock] = useState(5);

    function handleUpdateStock(newStock) {
        setStock(newStock);
    }

    return (
        <div class="card" style={styles}>
            <div class="card-body">
                <h5 class="card-title">Chevrolet Camaro</h5>
                <h6 class="card-subtitle mb-2 text-muted">General Motors</h6>
                <p class="card-text">The Chevrolet Camaro is a mid-size American automobile manufactured by Chevrolet, classified as a muscle car and some versions also as a pony car. It went on sale on September 29, 1966, for the 1967 model year and was designed as a competing model to the Ford Mustang.</p>
                <ItemCount stock={stock} initial="1" onUpdateStock={handleUpdateStock} />
            </div>
        </div>
    )
}