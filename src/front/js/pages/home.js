import React, { useContext } from "react";
import { Context } from "../store/appContext";
import recorte from "../../img/recorte.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-flex">
			<div style={{ height: "450px" }}>
				<div className="row pic m-auto">
					<div className="rectangle">
						<h2 id="texto">
							<div id="texto_yellow">We help you find</div>
							the ideal place for you!
						</h2>
						<h2 id="texto">
							<div id="texto_yellow">A perfect place </div>
							with suitable companion
						</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col p-3 mb-2 bg-secondary text-white">1 of 2</div>
				<div className="col p-3 mb-2 bg-success text-white">2 of 2</div>
			</div>
		</div>
	);
};
