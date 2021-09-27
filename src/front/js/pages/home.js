import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import { FilterExp } from "../component/filterExp";
import { FilterFea } from "../component/filterFea";
import { FilterBed } from "../component/filterBed";
import { PriceInput } from "../component/priceInput";

import MyMap from "../component/mapEngine";
import { CarouselRoomImg } from "../component/carouselRoomImg";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getRooms();
	}, []);

	useEffect(() => {
		actions.getRooms();
	}, [store.rooms.length]);

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
		e.preventDefault();
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

	let active_rooms = store.rooms?.filter(room => room.active_room === true && room.delete_room === false);

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

			<div className="row mr-0">
				<div className="col-md-4 pl-5 mt-5 mr-3 pr-5 mb-4 bg-secondary text-white filter">
					<h1 className="mt-5 texto_yellow">Search a room</h1>
					<br />
					<div className="row">
						<div className="col-4">
							<h3 className="ml-5 pt-3">City *</h3>
						</div>
						<div className="col-6">
							<div className="col-12 ml-3 pt-3">
								<input
									type="text"
									className="form-control roundShape"
									required
									onChange={e => {
										handleCity(e);
									}}
								/>
							</div>
						</div>
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
						{store.roomsSearch.length ? (
							store.roomsSearch.map(room => {
								return (
									<div key={room.id}>
										<CarouselRoomImg room={room} />
									</div>
								);
							})
						) : store.rooms ? (
							store.rooms.map(room => {
						{active_rooms.length ? (
							active_rooms.map(room => {
								return (
									<div key={room.id}>
										<CarouselRoomImg room={room} />
									</div>
								);
							})
						) : (
							<div className="text-center text-warning spiner-loading-data">
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
