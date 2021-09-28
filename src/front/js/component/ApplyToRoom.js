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
			alert("Your apply has been sent successfully!");
		} else {
			alert("You are not logged, please login to can apply at this room!");
		}
	};
	return (
		<div className="row container text-center" id="ContainerAplytoRoom">
			<div className="col-11 mt-3">
				<div className="carousel-caption-details-room-2   col-12  text-white">
					<h2 className=" mt-3 mb-2">{title}</h2>
				</div>

				<div className="d-flex flex-column">
					<div
						className=" mt-4"
						style={{
							backgroundImage: `url(${img})`,
							backgroundSize: "cover",
							width: "50rem",
							height: "30rem",
							marginLeft: "7rem"
						}}></div>
					<div className=" mt-4 text-white">
						<h2>{price} €</h2>
						<div className="d-flex justify-content-center">
							<i
								className="fas fa-map-marker-alt fa-2x mr-2"
								type="button"
								data-toggle="tooltip"
								data-placement="top"
								title="Address"
							/>
							<h2>{address},</h2>
							<h2>{city}</h2>
						</div>
					</div>
				</div>
			</div>
			<div
				className="iconClose col-1 mt-3  m-0 p-0 d-flex justify-content-end close"
				data-dismiss="modal"
				ref={closeBtn}>
				<i className="far fa-window-close text-white fa-lg" />
			</div>
			<div className="col-11 mt-3   m-0 p-0 d-flex justify-content-around ">
				<button
					className="btn btngreen mb-5 "
					onClick={() => {
						aceptRoomie();
						closeModalLogin();
					}}>
					Confirm
				</button>
				<button
					className="btn btnred mb-5 "
					onClick={() => {
						closeModalLogin();
					}}>
					Cancel
				</button>
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
