import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact = () => {
    const { store, actions } = useContext(Context)
    let newContact = {
        full_name: "Antonio",
        email: "antonio@antonio.com",
        phone: "2222",
        agenda_slug: "agenda_de_antonio",
        address: "47568 NW 34ST, 33434 FL, USA",
    }

    return (<div>Aquí debería agregar contactos nuevos
        <br />
        <Link to="/">Regresar a lista de contactos</Link>
        <br />
        <button type="button" onClick={() => {
            actions.addContact(newContact)
        }}>Agregar Contacto a la Agenda</button>
    </div>)
}

export default AddContact;