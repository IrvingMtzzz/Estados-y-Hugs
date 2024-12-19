import React, { useState } from "react";

const Contador: React.FC = () => {

const [contador, setCOntador]= useState<number>(0);

const incrementar =() =>{
    setCOntador(contador + 1);
}

const decrementar =() => {
    setCOntador(contador - 1);
}

    return (
        <div>
            <h1> Hook UseState</h1>
            <p>Contador {contador}</p>
            <button onClick={incrementar}>Sumar</button>
            <button onClick={decrementar}>Restar</button>
        </div>
    );
}

export default Contador;
