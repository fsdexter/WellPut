import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import { FilterExp } from "../component/filterExp";
import { FilterFea } from "../component/filterFea";
import { FilterBed } from "../component/filterBed";
import { PriceInput } from "../component/priceInput";

import MapBox from "../component/MapBox";
import { CarouselRoomImg } from "../component/carouselRoomImg";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let active_rooms = store.rooms?.filter(room => room.active_room === true && room.delete_room === false);

	useEffect(() => {
		actions.getRooms();
	}, []);

	useEffect(() => {
		actions.getRooms();
	}, [store.rooms.length]);

	const handleChangeRoomsByCity = dataCity => actions.setCity(dataCity.text_es);

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
					<MapBox height={300} handleResult={handleChangeRoomsByCity} />
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
				<div className="col-6 ml-5 mt-5 rooms-box">
					<div id="carouselOne" className="carousel slide" data-ride="carousel" data-interval="false">
						{store.roomsSearch.length ? (
							store.roomsSearch.map(room => {
								return (
									<div key={room.id}>
										<CarouselRoomImg room={room} />
									</div>
								);
							})
						) : active_rooms.length ? (
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
