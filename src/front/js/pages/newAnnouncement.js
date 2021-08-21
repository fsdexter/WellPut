import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/newAnnouncement.scss";
import MyMap from "../component/mapEngine";
import { FilterExp } from "../component/filterExp";
import doubleBlack from "../../img/doubleBlack.png";
import bedsofaBlack from "../../img/bedsofaBlack.png";
import addPic from "../../img/addPic.png";

export const NewAnnouncement = () => {
	const { store, actions } = useContext(Context);
	const [move, setMove] = useState("location");
	const [city, setCity] = useState("");
	const [address, setAddress] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [deposit, setDeposit] = useState("");

	function functionTest() {
		if (document.getElementById("checkWifi").checked) {
			console.log("Wifi");
		} else {
			console.log("Not Wifi");
		}
	}

	return (
		<div className="container">
			<ul className="nav nav-tabs " id="myTab" role="tablist">
				<li className="nav-item">
					<a
						className={move == "location" ? "nav-link active noLink" : "nav-link noLink"}
						onClick={() => setMove("location")}
						id="locationTab-tab"
						data-toggle="tab"
						href="#locationTab"
						role="tab"
						aria-controls="locationTab"
						aria-selected="true">
						<h5>Location</h5>
					</a>
				</li>
				<li className="nav-item">
					<a
						className={move == "description" ? "nav-link active noLink" : "nav-link noLink"}
						onClick={() => setMove("description")}
						id="descriptionTab-tab"
						data-toggle="tab"
						href="#descriptionTab"
						role="tab"
						aria-controls="descriptionTab"
						aria-selected="false">
						<h5>Description</h5>
					</a>
				</li>
				<li className="nav-item ">
					<a
						className={move == "pictures" ? "nav-link active noLink" : "nav-link noLink"}
						onClick={() => setMove("pictures")}
						id="picsTab-tab"
						data-toggle="tab"
						href="#picsTab"
						role="tab"
						aria-controls="picsTab"
						aria-selected="false">
						<h5>Pictures</h5>
					</a>
				</li>
				{/*
				<li className="nav-item">
					<a
						className={move == "preview" ? "nav-link active noLink" : "nav-link noLink"}
						onClick={() => setMove("preview")}
						id="previewTab-tab"
						data-toggle="tab"
						href="#previewTab"
						role="tab"
						aria-controls="previewTab"
						aria-selected="false">
						<h5>Preview</h5>
					</a>
				</li>
				*/}
			</ul>
			<div className="tab-content" id="myTabContent">
				<div
					className="tab-pane fade show active"
					id="locationTab"
					role="tabpanel"
					aria-labelledby="locationTab-tab">
					<div className="row">
						<div className="col-2 pt-3 fontInput">
							<p className="pl-4">City </p>
							<p className="pl-4">Address</p>
							{/*<p className="pl-4">Number</p>*/}
						</div>
						<div className="col pt-3">
							<input
								type="text"
								className="form-control roundShape"
								onChange={event => {
									setCity(event.target.value);
								}}
							/>
							<input
								type="text"
								className="form-control roundShape mt-3"
								onChange={event => {
									setAddress(event.target.value);
								}}
							/>
						</div>
						<div className="col-2 pt-3 fontInput" />
						<div className="col-3" />
					</div>
					<center>
						<MyMap center={{ lat: 40.416775, lng: -3.70379 }} style={{ width: "500px", height: "350px" }} />
					</center>
					<div className="row">
						<div className="col-10" />
						<div className="col-2">
							<button
								type="button"
								className="btn btn-warning ml-5"
								data-toggle="tab"
								href="#descriptionTab"
								onClick={() => setMove("description")}>
								Continue
							</button>
						</div>
					</div>
				</div>
				<div className="tab-pane fade" id="descriptionTab" role="tabpanel" aria-labelledby="descriptionTab-tab">
					<div className="row pt-4">
						<div className="col-2">
							<p className="fontInput pl-5">Title </p>{" "}
						</div>
						<div className="col ">
							<input
								type="text"
								className="form-control roundShape"
								onChange={event => {
									setTitle(event.target.value);
								}}
							/>
						</div>
						<div className="col-2" />
					</div>
					<div className="row mt-1  mb-3">
						<div className="col-2 mt-4">
							<p className="fontInputSm pl-2">Description </p>{" "}
						</div>
						<div className="col-8 ">
							<textarea
								className="form-control descriptionBack roundShape"
								id="exampleFormControlTextarea1 "
								rows="3"
								onChange={event => {
									setDescription(event.target.value);
								}}
							/>
						</div>
						<div className="col-1" />
					</div>
					<div className="row  mt-2 ">
						<div className="col">
							<div className="row ">
								<div className="col-4">
									<p className="fontInput pl-2">Price</p>{" "}
								</div>
								<div className="col-5">
									<input
										type="text"
										className="form-control"
										onChange={event => {
											setPrice(event.target.value);
										}}
									/>
								</div>
								{/*	<div className="col-3 mb-2">
									<input type="text" className="form-control" placeholder="Max." />
								</div>*/}
							</div>
							<div className="row ">
								<div className="col-4">
									<p className="fontInput pl-2">Deposit </p>{" "}
								</div>
								<div className="col-5">
									<input
										type="text"
										className="form-control"
										onChange={event => {
											setDeposit(event.target.value);
										}}
									/>
								</div>
								{/*<div className="col-3 mb-2">
									<input type="text" className="form-control" placeholder="Max." />
							</div>*/}
							</div>
						</div>
						<div className="col">
							<div className="row">
								<div className="col-4">
									<p className="fontInput">
										Expenses
										<br />
										included
									</p>
								</div>
								<div className="form-check form-check-inline col-3 pb-5 ">
									<input
										className=" form-check-input"
										type="checkbox"
										name="inlineRadioOptions"
										id="checkWifi"
										value="option1"
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										<i className="fas fa-wifi fa-2x" />
									</label>
								</div>
								<div className="form-check form-check-inline col-3 pb-5 ">
									<input
										className="form-check-input"
										type="checkbox"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="option2"
									/>
									<label className="form-check-label" htmlFor="inlineRadio2">
										<i className="fas fa-shower fa-2x" />
									</label>
								</div>
								<div className="col-4" />
								<div className="form-check form-check-inline col-3  pb-5 ">
									<input
										className=" form-check-input"
										type="checkbox"
										name="inlineRadioOptions"
										id="inlineRadio3"
										value="option3"
									/>
									<label className="form-check-label " htmlFor="inlineRadio3">
										<i className="fas fa-burn fa-2x  " />
									</label>
								</div>
								<div className="form-check form-check-inline col-3 pb-5 ">
									<input
										className="form-check-input"
										type="checkbox"
										name="inlineRadioOptions"
										id="inlineRadio4"
										value="option4"
									/>
									<label className="form-check-label" htmlFor="inlineRadio4">
										<i className="far fa-lightbulb fa-2x " />
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="row ">
						<div className="col">
							<div className="row ">
								<div className="col-4">
									<p className="fontInput pl-2">Features</p>
								</div>
								<div className="form-check form-check-inline col-3 pb-5  ">
									<input
										className=" form-check-input"
										type="checkbox"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										<i className="fas fa-building fa-2x" />
										<br />
										Facing the street
									</label>
								</div>
								<div className="form-check form-check-inline col-3 pb-5 ">
									<input
										className="form-check-input"
										type="checkbox"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="option2"
									/>
									<label className="form-check-label" htmlFor="inlineRadio2">
										<i className="fas fa-couch fa-2x" />
										<br />
										Furnished room
									</label>
								</div>
								<div className="col-4" />
								<div className="form-check form-check-inline col-3 pb-5">
									<input
										className=" form-check-input"
										type="checkbox"
										name="inlineRadioOptions"
										id="inlineRadio3"
										value="option3"
									/>
									<label className="form-check-label " htmlFor="inlineRadio3">
										<i className="fas fa-bath fa-2x" />
										<br />
										Suite Room
									</label>
								</div>
								<div className="form-check form-check-inline col-3 pb-5">
									<input
										className="form-check-input"
										type="checkbox"
										name="inlineRadioOptions"
										id="inlineRadio4"
										value="option4"
									/>
									<label className="form-check-label" htmlFor="inlineRadio4">
										<i className="fab fa-slideshare fa-2x" />
										<br />
										Shared Room
									</label>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="row mt-1">
								<div className="col-4">
									<p className="fontInput">Type of bed</p>
								</div>
								<div className="form-check form-check-inline col-3 pb-5">
									<input
										className=" form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio1"
										value="option1"
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										<i className="fas fa-bed fa-2x" />
										<br />
										Single Bed
									</label>
								</div>
								<div className="form-check form-check-inline col-3 pb-5 ">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio2"
										value="option2"
									/>
									<label className="form-check-label" htmlFor="inlineRadio2">
										<img id="doubleBed" src={doubleBlack} />
										<br />
										Double Bed
									</label>
								</div>
								<div className="col-4" />
								<div className="form-check form-check-inline col-3">
									<input
										className=" form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio3"
										value="option3"
									/>
									<label className="form-check-label " htmlFor="inlineRadio3">
										<i className="fas fa-times fa-2x" />
										<br />
										No Bed
									</label>
								</div>
								<div className="form-check form-check-inline col-3 ">
									<input
										className="form-check-input"
										type="radio"
										name="inlineRadioOptions"
										id="inlineRadio4"
										value="option4"
									/>
									<label className="form-check-label" htmlFor="inlineRadio4">
										<img id="sofaBed" src={bedsofaBlack} />
										<br />
										Sofa Bed
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-10" />
						<div className="col-2">
							<button
								type="button"
								className="btn btn-warning mb-5 ml-5"
								data-toggle="tab"
								href="#picsTab"
								onClick={() => setMove("pictures")}>
								Continue
							</button>
						</div>
					</div>
				</div>

				<div className="tab-pane fade" id="picsTab" role="tabpanel" aria-labelledby="picsTab-tab">
					<div className="row">
						<div className="col-3 text-center">
							{" "}
							<div className="card mt-5 mx-auto addPic" style={{ width: "14rem", height: "14rem" }}>
								<img className="card-img-top" src="..." alt="" />
							</div>
							<div className="card-body">
								<a href="#" className="btn btn-primary">
									Upload image
								</a>
							</div>
						</div>
						<div className="col-3 text-center">
							{" "}
							<div className="card mt-5 mx-auto addPic" style={{ width: "14rem", height: "14rem" }}>
								<img className="card-img-top" src="..." alt="" />
							</div>
							<div className="card-body">
								<a href="#" className="btn btn-primary">
									Upload image
								</a>
							</div>
						</div>
						<div className="col-3 text-center">
							{" "}
							<div className="card mt-5 mx-auto addPic" style={{ width: "14rem", height: "14rem" }}>
								<img className="card-img-top" src="..." alt="" />
							</div>
							<div className="card-body">
								<a href="#" className="btn btn-primary">
									Upload image
								</a>
							</div>
						</div>
						<div className="col-3 text-center">
							{" "}
							<div className="card mt-5 mx-auto addPic" style={{ width: "14rem", height: "14rem" }}>
								<img className="card-img-top" src="..." alt="" />
							</div>
							<div className="card-body">
								<a href="#" className="btn btn-primary">
									Upload image
								</a>
							</div>
						</div>
					</div>
					<br />
					<div className="row">
						<div className="col-10" />
						<div className="col-2">
							<button
								type="button"
								className="btn btn-warning mb-5 ml-5"
								data-toggle="tab"
								href="#previewTab"
								onClick={() =>
									console.log(city, address, title, description, price, deposit, functionTest())
								}>
								Upload
							</button>
						</div>
					</div>
				</div>
				{/*<div className="tab-pane fade" id="previewTab" role="tabpanel" aria-labelledby="previewTab-tab">
					4
				</div>*/}
			</div>
		</div>
	);
};
