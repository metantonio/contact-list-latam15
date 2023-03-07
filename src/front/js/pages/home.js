import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => { }, [store.usuario])

	return (
		<div className="text-center mt-5">
			<h1>{store.usuario.msg}</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<button type="button" onClick={() => { actions.login() }}>Login</button>
		</div>
	);
};
