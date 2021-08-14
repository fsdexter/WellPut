import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
// Librería para el carousel
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css?raw";
import "../../styles/carouselRoomImg.scss";
import { RatingStatic } from "./ratingStatic";

import roomDetails1 from "../../img/roomDetails.png";
import roomDetails2 from "../../img/cama.png";
import roomDetails3 from "../../img/login-room.png";

import "../../styles/detailedView.scss";

const titleExple = "Habitación luminosa en Sagrada Familia";
const priceExple = 450;

export const CarouselRoomImg = () => {
	const { store, actions } = useContext(Context);
	const slider = (
		<div>
			<div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
				<div className="carousel-inner caroShape d-flex">
					<div className="carousel-item  active ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails1} alt="First slide" />
						<div className="carousel-caption ">
							<h3>{titleExple} </h3>
							{/*<button className="heartButton">
								{" "}
								<i className="far fa-heart fa-2x" />
							</button>*/}
						</div>
					</div>
					<div className="carousel-item  ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails2} alt="Second slide" />
						<div className="carousel-caption ">
							<RatingStatic />
						</div>
					</div>
					<div className="carousel-item ">
						<img className="d-block w-100 caro_pic_fix" src={roomDetails3} alt="Third slide" />
						<div className="carousel-caption">
							<h2>€{priceExple}</h2>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);

	return slider;
};
