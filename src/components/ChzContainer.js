import React from "react";
import Cheese from "./Cheese";

function ChzContainer( {cheeses} ) {

    const showCheese = () => {
        return cheeses.map((cheese) => {
            return <Cheese cheese={cheese} key={cheese.id} />
    })
}

    return (
        <>
            <div className="card">
            {showCheese()}
            </div>
        </>
    )
}

export default ChzContainer;