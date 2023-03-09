import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
    const { store, actions } = useContext(Context)
    const [data, setData] = useState({})

    useEffect(() => { }, [data.full_name, data.phone, data.email])

    return (<div>Aquí debería agregar contactos nuevos
        <br />
        <Link to="/">Regresar a lista de contactos</Link>
        <br />
        <input placeholder="Agregue el nombre del contacto" name="nombre" onChange={(e) => { setData({ ...data, full_name: e.target.value }) }} />
        <input placeholder="Agregue nuúmero de teléfono" name="tlf" onChange={(e) => { setData({ ...data, phone: e.target.value }) }} />
        <input placeholder="Agregue correo" name="correo" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />


        <button type="button" onClick={() => {
            actions.addContact(data)
        }}>Agregar Contacto a la Agenda</button>
    </div>)
}

export default AddContact;