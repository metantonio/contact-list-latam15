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

        <br />
        <button onClick={async () => {
            let { respuestaJson, response } = await actions.useFetch("/apis/fake/contact/",
                {
                    full_name: data.full_name,
                    email: data.email,
                    agenda_slug: "agenda_de_antonio",
                    address: "47568 NW 34ST, 33434 FL, USA",
                    phone: data.phone
                },
                "POST"
            )
            if (!response.ok) {
                alert("No se registró el contacto")
                return
            }
            console.log("Contacto creado: \n", respuestaJson)
        }}>Boton con fetch</button>
    </div>)
}

export default AddContact;