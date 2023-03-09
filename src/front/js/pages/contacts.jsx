import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contactos = () => {
    const { store, actions } = useContext(Context)
    const [nombre, setNombre] = useState("")

    useEffect(() => { }, [store.listaContactos, nombre])

    return (<div>
        Contactos
        <br />
        <Link to="/add-contact">Agregar un contacto</Link>
        <br />
        <input type="text" placeholder="nombreNuevo" onChange={(e) => setNombre(e.target.value)} />
        <br />
        <ul>
            {store.listaContactos && store.listaContactos.length > 0 ? <>
                {store.listaContactos.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.full_name} - {item.email} - {item.phone}
                            <button
                                className="btn btn-warning"
                                button="button"
                                onClick={() => {
                                    if (nombre == "") {
                                        alert("Agregue un nombre")
                                        return
                                    }
                                    actions.editContact(index, nombre)
                                }}
                            >
                                Editar
                            </button>
                            <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => { actions.deleteContact(index) }}>
                                Eliminar Contacto
                            </button>
                        </li>
                    )
                })}
            </> : <>No hay contactos</>}
        </ul>
    </div>)
}

export default Contactos;