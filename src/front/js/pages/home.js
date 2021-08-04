import React, { useContext } from "react";
import { Context } from "../store/appContext";
import recorte from "../../img/recorte.jpg";
import maps from "../../img/maps.png";
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
							<br />
							<br />
							<div className="row">
								<div className="col-4">
									<h3 className="filterWords ml-4">
										Expenses
										<br />
										included
									</h3>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										<i className="fas fa-wifi fa-2x" />
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="option2"
									/>
									<label className="form-check-label" htmlFor="inlineRadio2">
										<i className="fas fa-faucet" />
									</label>
								</div>
							</div>
						</form>
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
