export const exampleStore = {
    exampleArray: [],
    exampleObj: {
        msg: "I'm an object"
    }

}

export function exampleActions(getStore, getActions, setStore) {
    return {
        exampleFunction: async () => {
            console.log("Soy una función del archivo ejemploStore que se ejecuta desde el flux.js")
            return true;
        },
    }
}