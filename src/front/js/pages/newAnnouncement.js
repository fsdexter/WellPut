import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/newAnnouncement.scss";
import MapBox from "../component/MapBox";
import doubleBlack from "../../img/doubleBlack.png";
import bedsofaBlack from "../../img/bedsofaBlack.png";
import { useHistory } from "react-router-dom";
import { API_BASE_URL } from "../constants";
export const NewAnnouncement = () => {
	const [files, setFiles] = useState(null);

	const { actions } = useContext(Context);
	const [city, setCity] = useState("");
	const [address, setAddress] = useState("");
	const history = useHistory();
	const [move, setMove] = useState("");
	const [roomData, setRoomData] = useState({
		city: "",
		address: "",
		title: "",
		description: "",
		price: null,
		deposit: null,
		facingTheStreet: "",
		furnishedRoom: "",
		suiteRoom: "",
		sharedRoom: "",
		expWiFi: "",
		expGas: "",
		expElectricity: "",
		expWater: "",
		type_bed: "",
		room_url: "",
		owner_id: null
	});
	const handleRoomData = e => {
		const { name, value } = e.target;
		setRoomData(prevState => ({
			...prevState,
			[name]: value,
			owner_id: JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id
		}));
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
			//	setRoomData({ ...roomData, singleBed: item, doubleBed: "", sofaBed: "", noBed: "" });
			setRoomData({ ...roomData, type_bed: item });
		} else if (item == "doubleBed") {
			//setRoomData({ ...roomData, singleBed: "", doubleBed: item, sofaBed: "", noBed: "" });
			setRoomData({ ...roomData, type_bed: item });
		} else if (item == "sofaBed") {
			//setRoomData({ ...roomData, singleBed: "", doubleBed: "", sofaBed: item, noBed: "" });
			setRoomData({ ...roomData, type_bed: item });
		} else if (item == "noBed") {
			//	setRoomData({ ...roomData, singleBed: "", doubleBed: "", sofaBed: "", noBed: item });
			setRoomData({ ...roomData, type_bed: item });
		}
	};

	const uploadImage = evt => {
		evt.preventDefault();
		let body = new FormData();
		body.append("profile_image", files[0]);
		const options = {
			body,
			method: "POST"
		};
		fetch(API_BASE_URL + "/api/upload", options)
			.then(resp => resp.json())
			.then(data => {
				setRoomData(prevState => ({ ...prevState, room_url: data.url }));
			});
	};

	const handleMap = dataCity => {
		const address = dataCity?.text_es || "";
		const city =
			dataCity.context
				.filter(field => field.id.includes("region"))[0]
				?.text_es.replace("Provincia de ", "")
				.replace("provincia de ", "") || "";

		setRoomData(prevState => ({
			...prevState,
			city,
			address
		}));
	};

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
			</ul>
			<div className="tab-content" id="myTabContent">
				<div
					className="tab-pane fade show active"
					id="locationTab"
					role="tabpanel"
					aria-labelledby="locationTab-tab">
					<div className="col-7 map-nuew-room">
						<h4 style={{ height: "30px" }}>
							{roomData.address && roomData.city ? `${roomData.address}, ${roomData.city}` : null}
						</h4>
						<hr />
						<MapBox height={350} handleResult={handleMap} />
					</div>
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
							<p className="fontInputSm pl-5">Description </p>
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
									<p className="fontInput pl-5">Price</p>{" "}
								</div>
								<div className="col-5">
									<input
										type="text"
										className="form-control"
										name="price"
										onChange={handleRoomData}
									/>
								</div>
							</div>
							<div className="row ">
								<div className="col-4">
									<p className="fontInput pl-5">Deposit </p>{" "}
								</div>
								<div className="col-5">
									<input
										type="text"
										className="form-control"
										name="deposit"
										onChange={handleRoomData}
									/>
								</div>
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
									<p className="fontInput pl-5">Features</p>
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
						{/* Upload Image Beggins */}
						<div className="col-8 fixNewBtn text-center">
							<div className="mx-auto card addPic mb-5"></div>
							<form onSubmit={uploadImage}>
								<input type="file" onChange={e => setFiles(e.target.files)} />
								<br />
								<button className="btn btn-primary mt-4">Upload picture</button>
							</form>
						</div>
						<div className="col-4">
							<button
								type="button"
								className="btn btn-warning lastBtn"
								data-toggle="tab"
								href="#previewTab"
								onClick={() => {
									actions.postNewAnnouncement(roomData);
									history.push(`/`);
								}}>
								Upload room
							</button>
						</div>
						{/* Upload Image Ends*/}
					</div>
					<br />
					<div className="row">
						<div className="col-8" />
						<div className="col-4"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
