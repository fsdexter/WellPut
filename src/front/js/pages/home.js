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
import { PriceInput } from "../component/priceInput";
import { Link } from "react-router-dom";
import MyMap from "../component/mapEngine";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div style={{ height: "550px" }}>
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

					<div className="row">
						<div className="col-3">
							<h3 className="ml-4">City</h3>
						</div>
						<form>
							<div className=" ml-3  pt-3">
								<input type="text" className="form-control roundShape" placeholder="write a city..." />
							</div>
						</form>
					</div>
					<br />
					<div className="card mx-auto mb-3" style={{ width: "70%" }}>
						<MyMap center={{ lat: 40.416775, lng: -3.70379 }} style={{ width: "270px", height: "150px" }} />
					</div>
					<br />
					<div>
						<PriceInput />
						<br />
						<div className="border border-warning">
							<FilterExp />
						</div>
						<br />
						<div className="border border-warning pt-3">
							<div className="row">
								<div className="col">
									<h3 className="ml-4">Rating</h3>
								</div>
								<div className="mr-3 col-6 mb-3 d-flex">
									<Rating />
								</div>
							</div>
						</div>
						<br />
						<div className="border border-warning pt-3">
							<div className="row">
								<div className="col">
									<h3 className="ml-4">Roomies</h3>
								</div>
								<div className="col-6 mb-3 pl-5">
									<Counter />
								</div>
							</div>
						</div>
						<br />
						<div className="border border-warning pt-5">
							<FilterOcc />
						</div>
						<br />
						<div className="border border-warning pt-5">
							<div className="row ">
								<div className="col-4 mb-5 ">
									<h3 className="ml-4">Interests</h3>
								</div>
								<div className="col-8">
									<AnimatedMulti /> {/* Instalar paquete para que funcione*/}
								</div>
							</div>
						</div>
						<br />
						<div className="border border-warning pt-2">
							<FilterFea />
						</div>
						<br />
						<div className="border border-warning pt-2">
							<FilterBed />
						</div>
					</div>
				</div>

				<div className="col-8 p-1 mb-2  text-white">
					<Link to="/detailedView">
						<div className="card" style={{ width: "100%" }}>
							<img className="card-img-top" src={recorte} alt="Card image cap" />
						</div>
					</Link>
					<div className="card" style={{ width: "100%" }}>
						<img className="card-img-top" src={recorte} alt="Card image cap" />
					</div>
					<div className="card" style={{ width: "100%" }}>
						<img className="card-img-top" src={recorte} alt="Card image cap" />
					</div>
					<h1 />
					<div className="card" style={{ width: "100%" }}>
						<img className="card-img-top" src={recorte} alt="Card image cap" />
					</div>
				</div>
			</div>
		</div>
	);
};
