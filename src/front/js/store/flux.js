import { exampleStore, exampleActions } from "./exampleStore.js"; //destructured import
import { usuarioStore, usuarioActions } from "./usuario.js";
import { contactStore, contactActions } from "./contact.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			...exampleStore, //this brings here the variables exampleArray and exampleObject
			...usuarioStore,
			...contactStore,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				//setStore({ demo: demo });

				//reset state demo only
				setStore({ ...store, demo: demo })
			},
			...exampleActions(getStore, getActions, setStore), //this will brings here the function exampleFunction, and it will be able to use store's states and actions
			...usuarioActions(getStore, getActions, setStore),
			...contactActions(getStore, getActions, setStore),

		}
	};
};

export default getState;
