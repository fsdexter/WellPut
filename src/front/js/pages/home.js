import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import { Rating } from "../component/rating";
import { Counter } from "../component/counter";
import { AnimatedMulti } from "../component/multiSelector";
import { FilterExp } from "../component/filterExp";
import { FilterOcc } from "../component/filterOcc";
import { FilterFea } from "../component/filterFea";
import { FilterBed } from "../component/filterBed";
import { PriceInput } from "../component/priceInput";
import { interestsOptions, languageOptions, cityOptions } from "../constants";

import { Link } from "react-router-dom";
import MyMap from "../component/mapEngine";
import { CarouselRoomImg, CarouselRoomImg2, CarouselRoomImg3, CarouselRoomImg4 } from "../component/carouselRoomImg";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getRooms();
	}, []);

	const [city, setCity] = useState();
	const [center, setCenter] = useState({ lat: 40.416775, lng: -3.70379 });
	const [formValue, setFormValue] = useState({
		interests: ""
	});
	const handleAddrTypeChange = (f, key) => {
		setFormValue({
			...formValue,
			[key]: f.map(item => {
				return item.value;
			})
		});
		actions.setInterests(formValue);
	};
	const handleCity = e => {
		setCity(e.target.value);
		actions.setCity(e.target.value);
		if (city != undefined) {
			if (city.toLowerCase().trim() === "madri") {
				setCenter({ lat: 40.416775, lng: -3.70379 });
			} else if (city.toLowerCase() === "barcelon") {
				setCenter({ lat: 41.385063, lng: 2.173404 });
			} else if (city.toLowerCase() === "malag") {
				setCenter({ lat: 36.721275, lng: -4.421399 });
			} else if (city.toLowerCase().trim() === "valenci") {
				setCenter({ lat: 39.47024, lng: -0.375 });
			} else {
				setCenter({ lat: 40.416775, lng: -3.70379 });
			}
		}
	};

	return (
		<div className="container-fluid" id="myContainerHome">
			<div style={{ height: "400px" }}>
				<div className="row pic m-auto">
					<div className="rectangle">
						<h2 className="textoH2">
							<div className="texto_yellow">We help you find</div>
							the ideal place for you!
						</h2>
						<h2 className="textoH2">
							<div className="texto_yellow">A perfect place </div>
							with suitable companion
						</h2>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-4 pl-5 mt-5 mr-3 pr-5 mb-4 bg-secondary text-white filter">
					<h1 className="mt-5 texto_yellow">Search a room</h1>
					<br />
					<div className="row">
						<div className="col-3">
							<h3 className="ml-5 pt-3">City</h3>
						</div>
						<form>
							<div className="col-12 ml-3 pt-3">
								<input
									type="text"
									className="form-control roundShape"
									onChange={e => {
										handleCity(e);
									}}
								/>
							</div>
						</form>
					</div>
					<br />
					<center>
						<MyMap center={center} style={{ width: "500px", height: "150px" }} zoom={8} />
					</center>
					<br />
					<div>
						<PriceInput />
						<br />
						<div className="border border-warning pb-3">
							<FilterExp />
						</div>
						<br />
						<div className="border border-warning pt-4 pb-4">
							<div className="row">
								<div className="col-4">
									<h3 className="ml-4">Rating</h3>
								</div>
								<div className="col-6 ml-5 ratings">
									<Rating />
								</div>
							</div>
						</div>
						{/*<br />
						<div className="border border-warning pt-4 pb-4">
							<div className="row">
								<div className="col-4">
									<h3 className="ml-4">Roomies</h3>
								</div>
								<div className="col-6 mb-3 pl-5 ml-5">
									<Counter />
								</div>
							</div>
						</div>{" "}
						*/}
						<br />
						<div className="border border-warning pt-5">
							<FilterOcc />
						</div>
						<br />
						<div className="border border-warning pt-5">
							<div className="row ">
								<div className="col-4 mb-5">
									<h3 className="ml-4">Interests</h3>
								</div>
								<div className="col-6 ml-5">
									<AnimatedMulti
										options={interestsOptions}
										change={f => handleAddrTypeChange(f, "interests")}
									/>
								</div>
							</div>
						</div>
						<br />
						<div className="border border-warning pt-4 pb-4">
							<FilterFea />
						</div>
						<br />
						<div className="border border-warning pt-4 pb-4">
							<FilterBed />
						</div>
					</div>
					<button
						className="btn btnYellow btn-lg btn-block mt-4 mb-4"
						onClick={() => {
							actions.searchRoom();
						}}>
						Apply filters
					</button>
				</div>
				<div className="col-6 ml-5 mt-5">
					<div id="carouselOne" className="carousel slide" data-ride="carousel" data-interval="false">
						{store.rooms ? (
							store.rooms.map(room => {
								return (
									<div key={room.id}>
										<CarouselRoomImg room={room} />;
									</div>
								);
							})
						) : (
							<div className="text-center text-warning mt-5">
								<i className="fas fa-spinner fa-pulse fa-6x" />
							</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
