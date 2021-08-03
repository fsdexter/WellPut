import React, { useContext } from "react";
import { Context } from "../store/appContext";
import recorte from "../../img/recorte.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-flex">
			<div className="row">
				<img src={recorte} className="pic m-auto " />
				rectangle
			</div>
			<div className="row">
				<div className="col p-3 mb-2 bg-secondary text-white">1 of 2</div>
				<div className="col p-3 mb-2 bg-success text-white">2 of 2</div>
			</div>
		</div>
	);
};
