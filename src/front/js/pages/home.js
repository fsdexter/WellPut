import React, { useContext } from "react";
import { Context } from "../store/appContext";
import recorte from "../../img/recorte.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
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
				<div className="col-3 p-1 mb-2 bg-secondary text-white filter">
					<h1 id="texto_yellow">Search a room</h1>
				</div>

				<div className="col-8 p-1 mb-2  text-white">
					<div className="card" style={{ width: "100%" }}>
						<img className="card-img-top" src={recorte} alt="Card image cap" />
					</div>
					<div className="card" style={{ width: "100%" }}>
						<img className="card-img-top" src={recorte} alt="Card image cap" />
					</div>
					<div className="card" style={{ width: "100%" }}>
						<img className="card-img-top" src={recorte} alt="Card image cap" />
					</div>
					<div className="card" style={{ width: "100%" }}>
						<img className="card-img-top" src={recorte} alt="Card image cap" />
					</div>
				</div>
			</div>
		</div>
	);
};
