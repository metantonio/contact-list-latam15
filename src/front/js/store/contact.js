export const contactStore = {
    listaContactos: [{
        full_name: "Dave Bradley",
        email: "dave@gmail.com",
        agenda_slug: "agenda_de_antonio",
        address: "47568 NW 34ST, 33434 FL, USA",
        phone: "7864445566"
    }]
}

export function contactActions(getStore, getActions, setStore) {
    return {
        addContact: async (obj) => {
            let store = getStore()
            let arrTemp = store.listaContactos.slice()

            arrTemp.push(obj)
            setStore({ ...store, listaContactos: arrTemp })

            return store.listaContactos;
        },
        deleteContact: (indice) => {
            let store = getStore()
            let arrTemp = store.listaContactos.filter((item, index) => {
                return index != indice
            })
            setStore({ ...store, listaContactos: arrTemp })
        },
        editContact: (indice, nombre) => {
            let store = getStore()
            let arrTemp = store.listaContactos.slice()
            arrTemp[indice]["full_name"] = nombre

            setStore({ ...store, listaContactos: arrTemp })

        },
        peticionEjemplo: async () => {
            let suma = 4
            /* fetch("https://assets.breatheco.de/apis/fake/contact/agenda")
                .then((promesa) => promesa.json() //puede tomar tiempo
                )
                .then((data1) => {
                    console.log("response", data1)
                    //return response
                }).catch((error) => {
                    console.log(error)
                }) */

            //2do método async-await en cascada
            let respuesta = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda")

            if (respuesta.ok) {
                console.log("buena respuesta")
                let respuestaJSON = await respuesta.json() //proceso puede tomar tiempo
                console.log(respuestaJSON)
            } else {
                console.log("mala respuesta")
            }
            //let respuesta2 = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda")
            //respuesta recibe una promesa
            //console.log(respuesta.ok, respuesta.status)




            //recibiendo respuestas en paralelo
            /* let respuesta = fetch("https://assets.breatheco.de/apis/fake/contact/agenda")
            let respuesta2 = fetch("https://assets.breatheco.de/apis/fake/contact/agenda")
            let [a, b] = await Promise.all([respuesta, respuesta2]) //llegan en formato de promesa al mismo tiempo

            let respuestaJSON = await a.json()  //pueden tomar tiempo
            let respuestaJSON2 = await b.json() //pueden tomar tiempo
            console.log(respuestaJSON)
 */
        },
        fetchPost: async () => {
            //2do método async-await en cascada
            let respuesta = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    full_name: "David",
                    email: "david11@gmail.com",
                    agenda_slug: "agenda_de_antonio",
                    address: "47568 NW 34ST, 33434 FL, USA",
                    phone: "7864445566"
                })
            })

            /* if (!respuesta.ok) {
                //cualquier cosa aquí
                return
            } */


            let respuestaJSON = await respuesta.json()
            console.log(respuestaJSON)

        }
    }
}