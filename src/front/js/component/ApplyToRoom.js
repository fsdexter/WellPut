import React, { useState, useContext, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RatingStatic } from "../component/ratingStatic";
import "../../styles/applyToRoom.scss";
import roomExample from "../../img/roomDetails.png";
import tenantExample from "../../img/Becker.jpg";

export const ApplyToRoom = props => {
	const { img, title, price, address, city, roomId } = props;
	const { actions } = useContext(Context);
	const closeBtn = useRef(null);
	//////////////////////////////////////
	const [averageRating, setAverageRating] = useState();
	useEffect(() => {
		getDetailsRoom();
	}, []);
	const getDetailsRoom = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/api/detailed_room/${room_id}`);
			const room = await response.json();
			setDetails(room);

			// Calcular la media de los ratings
			let room_reviews = room.reviews.map(review => review.rating);
			setAverageRating(
				Math.round(
					room_reviews.reduce(
						(accumulator, currentValue) => (currentValue ? currentValue + accumulator : accumulator),
						0
					) / room_reviews.length
				)
			);
		} catch (error) {
			return error.message;
		}
	};
	//////////////////////////////////////

	const closeModalLogin = () => {
		closeBtn.current.click();
	};
	const aceptRoomie = props => {
		if (localStorage.length > 0) {
			actions.addRoomie(
				JSON.parse(localStorage.getItem("user")).id || JSON.parse(localStorage.getItem("user")),
				roomId
			);
			alert("exitoso");
		} else {
			alert("You are not looged,  Please login!");
		}
	};
	return (
		<div className="row container text-center  " id="loginContainer">
			<div
				className="iconClose col-12 mt-3  m-0 p-0 d-flex justify-content-end close"
				data-dismiss="modal"
				ref={closeBtn}>
				<i className="far fa-window-close text-white fa-lg" />
			</div>

			<div className="carousel-caption-details-room  col-12 d-flex text-white">
				<h2 className="title-detail-room">{title}</h2>
			</div>
			<div className="row d-flex justify-content-around">
				<div className="col-12  d-flex">
					<div
						className="col-8 mt-4"
						style={{
							backgroundImage: `url(${img})`,
							backgroundSize: "cover",
							width: "50rem",
							height: "38rem"
						}}></div>
					<div className="col-4 mt-4 text-white">
						<h2>{price} €</h2>
						<h2>{address}</h2>
						<h2>{city}</h2>
						<RatingStatic rating={averageRating} />
					</div>
				</div>
			</div>
			<div className="col-12 mt-3  m-0 p-0 d-flex ">
				<Link>
					<button
						className="btn btnYellow mb-5 btnYelloRoom"
						onClick={() => {
							aceptRoomie();
							closeModalLogin();
						}}>
						Confirm
					</button>
				</Link>
			</div>
		</div>
	);
};
ApplyToRoom.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.string,
	address: PropTypes.string,
	city: PropTypes.string,
	roomId: PropTypes.int,
	userlog: PropTypes.int
};
