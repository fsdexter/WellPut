import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
// Librería para el carousel
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import roomDetails1 from "../../img/roomDetails.png";
import bathroom from "../../img/bathroom.jpg";
import roomDetails3 from "../../img/login-room.png";

import "../../styles/detailedView.scss";

export const CarouselRoomImg = () => {
	const { store, actions } = useContext(Context);
	const slider = (
		<AwesomeSlider>
			{/* Hacer cuando tengamos datos de habitaciones en el flux*/}
			{/* {store.roomList.map( room => {
				<div key={room.id} data-src={room.photo_url} className="carouselimgRoom"/>
			})} */}

			<div data-src={roomDetails1} className="carouselimgRoom" />
			<div data-src={bathroom} className="carouselimgRoom" />
			<div data-src={roomDetails3} className="carouselimgRoom" />
		</AwesomeSlider>
	);

	return slider;
};
