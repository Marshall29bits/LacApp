import React from "react";
export default function Conexion(props) {
    return(
    <div className="div-prueba">
        <h1 className="text-base text-yellow-400">Saldo:</h1>
        <h1 className="text-base text-blue-600"> {props.balance != null ? Number(props.balance).toFixed(3) : " "}ETH</h1>
    </div>
    )
}