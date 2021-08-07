import React, { useContext } from "react";
import { Context } from "../store/appContext";
import recorte from "../../img/recorte.jpg";
import maps from "../../img/maps.png";
import "../../styles/home.scss";
import { Rating } from "../component/rating";
import { Counter } from "../component/counter";
import { AnimatedMulti } from "../component/multiSelector";
import { FilterExp } from "../component/filterExp";
import { FilterOcc } from "../component/filterOcc";
import { FilterFea } from "../component/filterFea";
import { FilterBed } from "../component/filterBed";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div style={{ height: "450px" }}>
				<div className="row pic m-auto">
					<div className="rectangle">
						<h2 id="texto">
							<div id="texto_yellow">We help you find</div>
							the ideal place for you! branch test
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
					<h1 id="texto_yellow" className="mt-3">
						Search a room
					</h1>
					<br />
					<br />

					<div className="row">
						<div className="col-3">
							<h3 className="filterWords  ml-4">City</h3>
						</div>
						<form>
							<div className="col ml-3">
								<input type="text" className="form-control roundShape" placeholder="write a city..." />
							</div>
						</form>
					</div>
					<br />
					<div className="card mx-auto" style={{ width: "70%" }}>
						<img className="card-img-top roundShape " src={maps} alt="Card image cap" />
					</div>
					<br />
					<div>
						<form>
							<div className="row">
								<div className="col-4">
									<h3 className="filterWords ml-4">Price</h3>
								</div>
								<div className="col-3">
									<input type="text" className="form-control" placeholder="Min." />
								</div>
								<div className="col-3 mr-2">
									<input type="text" className="form-control" placeholder="Max." />
								</div>
							</div>
							<br />
							<div className="row">
								<div className="col-4">
									<h3 className="filterWords ml-4">Deposit</h3>
								</div>
								<div className="col-3">
									<input type="text" className="form-control" placeholder="Min." />
								</div>
								<div className="col-3 mr-2">
									<input type="text" className="form-control" placeholder="Max." />
								</div>
							</div>
						</form>
						<br />
						<div>
							<FilterExp />
						</div>
						<div className="row">
							<div className="col">
								<h3 className="ml-4">Rating</h3>
							</div>
							<div className="pr-5 mr-4 col d-flex">
								<Rating />
							</div>
						</div>
						<br />
						<div className="row ">
							<div className="col">
								<h3 className="ml-4">Roomies</h3>
							</div>
							<div className="pr-5 mr-4 col d-flex">
								<Counter />
							</div>
						</div>
						<br />
						<div>
							<FilterOcc />
						</div>
						<div className="row">
							<div className="col">
								<h3 className="ml-4">Interests</h3>
							</div>
							<div className="col">
								<AnimatedMulti /> {/* Instalar paquete para que funcione*/}
							</div>
						</div>
						<br />
						<div>
							<FilterFea />
						</div>
						<br />
						<FilterBed />
					</div>
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
