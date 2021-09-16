import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// Librería para el carousel
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css?raw";
import "../../styles/carouselRoomImg.scss";
import { RatingStatic } from "./ratingStatic";

import "../../styles/detailedView.scss";

export const CarouselRoomImg = props => {
	let room_reviews = props.room.tenancies.map(tenancy => tenancy.reviews.map(review => review));

	let averageRating = Math.round(
		room_reviews.reduce(
			(accumulator, currentValue) => (currentValue[0] ? currentValue[0].rating + accumulator : accumulator),
			0
		) / room_reviews.length
	);

	const slider = (
		<Link
			onClick={() => {
				localStorage.setItem("details", JSON.stringify(props.room));
			}}
			to={`/detailedView/${props.room}`}>
			<div className="carHome">
				<div
					className={
						props.isDetailRoom ? "carousel-inner d-flex caroShapeCustom" : "carousel-inner d-flex caroShape"
					}>
					<div className="carousel-item active ">
						<img className="d-block w-100 caro_pic_fix" src={props.room.room_url} />;
						<div className="carousel-caption ">
							<h4 className={props.isDetailRoom ? "maybeWorks mt-3" : "maybeWorks mt-1"}>
								{props.room.title}{" "}
							</h4>
							<div className={props.isDetailRoom ? "row rowCustom d-flex justify-content-center" : "row"}>
								<div className={props.isDetailRoom ? "caroPriceCustom mb-3" : "caroPrice"}>
									<h2>{props.room.price} €</h2>
								</div>

								{props.room.tenancies.map(tenancy => {
									return (
										<div key={tenancy.id}>
											<div
												className={
													props.isDetailRoom
														? "starCaroCustom d-flex justify-content-around mb-3"
														: "starCaro d-flex justify-content-around"
												}>
												<RatingStatic rating={averageRating} />
												<button className="heartButtonFix ml-5 pr-5 pl-5">
													<i className="far fa-heart fa-2x" />
												</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);

	return slider;
};

CarouselRoomImg.propTypes = {
	isDetailRoom: PropTypes.bool
};

CarouselRoomImg.defaultProps = {
	isDetailRoom: false
};

CarouselRoomImg.propTypes = {
	room: PropTypes.object
};
