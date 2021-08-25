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

	const [move, setMove] = useState("");
	const [roomData, setRoomData] = useState({
		city: "",
		address: "",
		title: "",
		description: "",
		price: "",
		deposit: "",
		facingTheStreet: "",
		furnishedRoom: "",
		suiteRoom: "",
		sharedRoom: "",
		expWiFi: "",
		expGas: "",
		expElectricity: "",
		expWater: "",
		singleBed: "",
		doubleBed: "",
		sofaBed: "",
		noBed: ""
	});
	const handleRoomData = e => {
		const { name, value } = e.target;
		setRoomData(prevState => ({ ...prevState, [name]: value }));
	};

	const onClickHandeler = e => {
		var item = roomData[e.target.name];
		if (item == "") {
			setRoomData({ ...roomData, [e.target.name]: e.target.name }); //o cambiar esto por false, para ser booleano
		} else {
			setRoomData({ ...roomData, [e.target.name]: "" });
		}
	};
	const onClickHandelerBed = e => {
		var item = e.target.value;
		if (item == "singleBed") {
			setRoomData({ ...roomData, singleBed: item, doubleBed: "", sofaBed: "", noBed: "" });
		} else if (item == "doubleBed") {
			setRoomData({ ...roomData, singleBed: "", doubleBed: item, sofaBed: "", noBed: "" });
		} else if (item == "sofaBed") {
			setRoomData({ ...roomData, singleBed: "", doubleBed: "", sofaBed: item, noBed: "" });
		} else if (item == "noBed") {
			setRoomData({ ...roomData, singleBed: "", doubleBed: "", sofaBed: "", noBed: item });
		}
	};
	/*function functionTest() {
		if (document.getElementById("checkWifi").checked) {
			console.log("Wifi");
		}
		if (document.getElementById("checkShower").checked) {
			console.log("Water");
		}
		if (document.getElementById("checkBurn").checked) {
			console.log("Gas");
		}
		if (document.getElementById("checkBulb").checked) {
			console.log("Electricity");
		}
		if (document.getElementById("checkFacing").checked) {
			console.log("Facing the street");
		}
		if (document.getElementById("checkFurnished").checked) {
			console.log("Furnished");
		}
		if (document.getElementById("checkSuite").checked) {
			console.log("Suite Room");
		}
		if (document.getElementById("checkedShared").checked) {
			console.log("Shared Room");
		}
		if (document.getElementById("checkSingle").checked) {
			console.log("Single Bed");
		}
		if (document.getElementById("checkDouble").checked) {
			console.log("Double Bed");
		}
		if (document.getElementById("checkNope").checked) {
			console.log("No Bed");
		}
		if (document.getElementById("checkSofa").checked) {
			console.log("Sofa Bed");
		}
	}*/

	return (
		<div className="container">
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name="exampleRadios"
					id="exampleRadios1"
					value="option1"
					onClick={() => console.log("hello")}
				/>
				<label className="form-check-label" htmlFor="exampleRadios1">
					Default radio
				</label>
			</div>
			<div className="form-check">
				<input
					className="form-check-input"
					type="radio"
					name="exampleRadios"
					id="exampleRadios2"
					value="option2"
				/>
				<label className="form-check-label" htmlFor="exampleRadios2">
					Second default radio
				</label>
			</div>

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
								name="city"
								onChange={handleRoomData}
							/>
							<input
								type="text"
								className="form-control roundShape mt-3"
								name="address"
								onChange={handleRoomData}
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
								name="title"
								onChange={handleRoomData}
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
								name="description"
								onChange={handleRoomData}
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
										name="price"
										onChange={handleRoomData}
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
										name="deposit"
										onChange={handleRoomData}
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
										name="expWiFi"
										id="checkWifi"
										value="option1"
										onClick={onClickHandeler}
									/>
									<label className="form-check-label" htmlFor="inlineRadio1">
										<i className="fas fa-wifi fa-2x" />
									</label>
								</div>
								<div className="form-check form-check-inline col-3 pb-5 ">
									<input
										className="form-check-input"
										type="checkbox"
										name="expWater"
										id="checkShower"
										value="option2"
										onClick={onClickHandeler}
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
										name="expGas"
										id="checkBurn"
										value="option3"
										onClick={onClickHandeler}
									/>
									<label className="form-check-label " htmlFor="inlineRadio3">
										<i className="fas fa-burn fa-2x  " />
									</label>
								</div>
								<div className="form-check form-check-inline col-3 pb-5 ">
									<input
										className="form-check-input"
										type="checkbox"
										name="expElectricity"
										id="checkBulb"
										value="option4"
										onClick={onClickHandeler}
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
										name="facingTheStreet"
										id="checkFacing"
										value="option1"
										onClick={onClickHandeler}
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
										name="furnishedRoom"
										id="checkFurnished"
										value="option2"
										onClick={onClickHandeler}
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
										name="suiteRoom"
										id="checkSuite"
										value="option3"
										onClick={onClickHandeler}
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
										name="sharedRoom"
										id="checkedShared"
										value="option4"
										onClick={onClickHandeler}
										s
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
										className="form-check-input"
										type="radio"
										name="beds"
										id="checkSingle"
										value="singleBed"
										onClick={onClickHandelerBed}
									/>
									<label className="form-check-label" htmlFor="checkSingle">
										<i className="fas fa-bed fa-2x" />
										<br />
										Single Bed
									</label>
								</div>
								<div className="form-check form-check-inline col-3 pb-5 ">
									<input
										className="form-check-input"
										type="radio"
										name="beds"
										id="checkDouble"
										value="doubleBed"
										onClick={onClickHandelerBed}
									/>
									<label className="form-check-label" htmlFor="checkDouble">
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
										name="beds"
										id="checkNope"
										value="noBed"
										onClick={onClickHandelerBed}
									/>
									<label className="form-check-label " htmlFor="checkNope">
										<i className="fas fa-times fa-2x" />
										<br />
										No Bed
									</label>
								</div>
								<div className="form-check form-check-inline col-3 ">
									<input
										className="form-check-input"
										type="radio"
										name="beds"
										id="checkSofa"
										value="sofaBed"
										onClick={onClickHandelerBed}
									/>
									<label className="form-check-label" htmlFor="checkSofa">
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
								onClick={() => actions.postNewAnnouncement(roomData)}>
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
