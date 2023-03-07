import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contactos = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => { }, [store.listaContactos])

    return (<div>
        Contactos
        <br />
        <Link to="/add-contact">Agregar un contacto</Link>
        <br />
        <ul>
            {store.listaContactos && store.listaContactos.length > 0 ? <>
                {store.listaContactos.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.full_name} - {item.email} - {item.phone}
                        </li>
                    )
                })}
            </> : <>No hay contactos</>}
        </ul>
    </div>)
}

export default Contactos;