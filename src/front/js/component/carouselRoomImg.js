import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "react-awesome-slider/dist/styles.css?raw";
import "../../styles/carouselRoomImg.scss";
import { RatingStatic } from "./ratingStatic";

export const CarouselRoomImg = props => {
	//MEDIA EN BACKS
	let room_reviews = props.room.reviews.map(review => review.rating);

	let averageRating = Math.round(
		room_reviews.reduce(
			(accumulator, currentValue) => (currentValue ? currentValue + accumulator : accumulator),
			0
		) / room_reviews.length
	);
	const slider = (
		<Link
			onClick={() => {
				localStorage.setItem("details", JSON.stringify(props.room));
			}}
			to={`/detailedView/${props.room.id}`}>
			<div className="carHome">
				<div className="carousel-inner d-flex caroShape">
					<div className="carousel-item active ">
						<img
							className="d-block w-100 caro_pic_fix"
							src={
								props.room.room_url
									? props.room.room_url
									: "https://img.freepik.com/vector-gratis/plantilla-fondo-interior-dormitorio-dibujos-animados-acogedora-habitacion-moderna-luz-manana_33099-171.jpg?size=626&ext=jpg"
							}
						/>
						;
						<div className="carousel-caption ">
							<h4 className="maybeWorks mt-1">{props.room.title} </h4>
							<div className="row">
								<div className="caroPrice">
									<h2>{props.room.price} €</h2>
								</div>

								<div className="starCaro d-flex justify-content-around">
									<RatingStatic rating={averageRating} />

									<button className="heartButtonFix ml-5 pr-5 pl-5">
										<i className="far fa-heart fa-2x" />
									</button>
								</div>
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
	room: PropTypes.object
};
