import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../constants";
import { AddReview } from "../component/addReview";
import { OwnerResume } from "../component/ownerResume";
import { ReviewsResume } from "../component/reviewsResumen";
import { RatingStatic } from "../component/ratingStatic";
import { ApplyToRoom } from "../component/ApplyToRoom";

import bedSofa from "../../img/bedsofaBlack.png";
import doubleBed from "../../img/doubleBlack.png";

import "../../styles/detailedView.scss";

export const DetailedView = () => {
	const { store, actions } = useContext(Context);
	let { room_id } = useParams();
	let userId = JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id;
	let user = JSON.parse(localStorage.getItem("user")).user || JSON.parse(localStorage.getItem("user"));
	const [details, setDetails] = useState();
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

	// const getCurrentroom = async () => {
	// 	try {
	// 		const response = await fetch(`${API_BASE_URL}/api/current_user_room/${user_id}`);
	// 		const room = await response.json();
	// 		setCurrent(room);
	// 	} catch (error) {
	// 		return error.message;
	// 	}
	// };

	return details ? (
		<div className="d-flex flex-column">
			<div className="carousel-item active">
				<img
					className="d-block w-100 detail-img-room"
					src={
						details.room_url
							? details.room_url
							: "https://img.freepik.com/vector-gratis/plantilla-fondo-interior-dormitorio-dibujos-animados-acogedora-habitacion-moderna-luz-manana_33099-171.jpg?size=626&ext=jpg"
					}
				/>
				<div className="carousel-caption carousel-caption-details-room">
					<h4 className="title-detail-room mt-3">{details.title} </h4>
					<div className="row rowCustom d-flex justify-content-center">
						<div className="caroPriceCustom mb-3">
							<h2>{details.price} €</h2>
						</div>
						<div className="starCaroCustom d-flex justify-content-around mb-3">
							<RatingStatic rating={averageRating} />
							{userId === details.current_renter ? (
								<button
									type="button"
									className="navbar btn  btnapllyroom"
									data-toggle="modal"
									data-target="#addReviewModal">
									<i className="far fa-comment-dots fa-2x text-white" aria-hidden="true"></i>{" "}
									&nbsp;&nbsp; <h4 className="textbuttons"> Add Review</h4>
								</button>
							) : userId === details.owner_id ? (
								<h4 className="textbuttons">Your Room</h4>
							) : (
								<button
									type="button"
									className="navbar btn  btnapllyroom"
									data-toggle="modal"
									data-target="#notificationModal">
									<i className="fa fa-user-plus fa-2x text-white" aria-hidden="true" /> &nbsp;&nbsp;
									<h4 className="textbuttons"> Apply Room</h4>
								</button>
							)}
							<button
								className="heartButtonFix ml-5 pr-5 pl-5"
								data-toggle="tooltip"
								data-placement="top"
								title="Add Favorite">
								<i className="far fa-heart fa-2x" />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="row d-flex flex-column mb-3 mr-0">
				<div className="col-9 mt-2" id="idescriptionRoomDetail">
					<div className="d-flex flex-wrap mb-2 mt-2">
						<i
							className="fas fa-map-marker-alt fa-2x mr-2"
							type="button"
							data-toggle="tooltip"
							data-placement="top"
							title="Address"
						/>
						<h4 className="ml-2 font-weight-bolder align-self-center mt-2">
							{details.address}, {details.city.map(c => c.name)}
						</h4>
					</div>
					<p>{details.description}</p>
				</div>
			</div>

			<div className="row mr-0" id="containerDetailDetail">
				<div className="col-2" id="oRBox">
					<OwnerResume ownerId={details.owner_id} />
				</div>

				<div className="col-9 d-flex justify-content-around" id="detailsDetails">
					<div className="col-4">
						<div className="d-flex flex-wrap mb-4">
							<i
								className="far fa-money-bill-alt fa-2x mr-2"
								type="button"
								data-toggle="tooltip"
								data-placement="top"
								title="Deposit"
							/>
							<h6 className="ml-2 mt-2">{details.deposit}€</h6>
						</div>

						<div className="d-flex flex-column mb-4">
							<h5 className="font-weight-bolder ">Type Bed </h5>
							{details.type_bed === "single" ? (
								<i
									className="fas fa-bed fa-2x mt-2"
									type="button"
									data-toggle="tooltip"
									data-placement="top"
									title="Single Bed"
								/>
							) : null}
							{details.type_bed === "doubleBed" ? (
								<img
									src={doubleBed}
									type="button"
									data-toggle="tooltip"
									data-placement="top"
									title="Double Bed"
									className="mt-2 doubleBed"
								/>
							) : null}
							{details.type_bed === "noBed" ? (
								<i
									className="fas fa-times fa-2x mt-2"
									type="button"
									data-toggle="tooltip"
									data-placement="top"
									title="No Bed"
								/>
							) : null}
							{details.type_bed === "sofaBed" ? (
								<img
									src={bedSofa}
									type="button"
									data-toggle="tooltip"
									data-placement="top"
									title="Sofa Bed"
									className="mt-2 sofaBed"
								/>
							) : null}
						</div>

						<div className="d-flex flex-column">
							<h5 className="font-weight-bolder"> Expenses included</h5>
							<div className="d-flex flex-wrap mt-2 mb-2">
								{details.expense != [] ? (
									details.expense.map(exp => {
										return (
											<div key={exp.id}>
												{exp.name === "wifi" ? (
													<i
														className="fas fa-wifi fa-2x mr-3"
														type="button"
														data-toggle="tooltip"
														data-placement="top"
														title="Wifi"
													/>
												) : null}
												{exp.name === "light" ? (
													<i
														className="far fa-lightbulb fa-2x mr-3"
														type="button"
														data-toggle="tooltip"
														data-placement="top"
														title="Electricity"
													/>
												) : null}
												{exp.name === "Water" ? (
													<i
														className="fas fa-shower fa-2x mr-3"
														type="button"
														data-toggle="tooltip"
														data-placement="top"
														title="Water"
													/>
												) : null}
												{exp.name === "gas" ? (
													<i
														className="fas fa-burn fa-2x"
														type="button"
														data-toggle="tooltip"
														data-placement="top"
														title="Gas"
													/>
												) : null}
											</div>
										);
									})
								) : (
									<p>Not incluid any expenses</p>
								)}
							</div>
						</div>
						<div className="d-flex flex-column mb-5">
							<h5 className="font-weight-bolder mt-3">Features</h5>
							<div className="d-flex flex-wrap mt-2 mb-2">
								{details.feature ? (
									details.feature.map(feat => {
										return (
											<div key={feat.id}>
												{feat.name === "facing the street" ? (
													<i
														className="fas fa-building fa-2x mr-3"
														type="button"
														data-toggle="tooltip"
														data-placement="top"
														title="Facing the street"
													/>
												) : null}
												{feat.name === "furnished room" ? (
													<i
														className="fas fa-couch fa-2x mr-3"
														type="button"
														data-toggle="tooltip"
														data-placement="top"
														title="Furnished room"
													/>
												) : null}
												{feat.name === "suite room" ? (
													<i
														className="fas fa-bath fa-2x mr-3"
														type="button"
														data-toggle="tooltip"
														data-placement="top"
														title="Suite"
													/>
												) : null}
												{feat.name === "shared room" ? (
													<i
														className="fab fa-slideshare fa-2x"
														type="button"
														data-toggle="tooltip"
														data-placement="top"
														title="Shared room"
													/>
												) : null}
											</div>
										);
									})
								) : (
									<p>Not incluid any feature</p>
								)}
							</div>
						</div>
					</div>
					<div className="col-6 reviesRes">
						<ReviewsResume reviews={details.reviews} roomId={details.id} tenancies={details.tenancies} />
					</div>
				</div>
				{/*<!-- notification Modal -->*/}
				<div id="notificationModal" className="modal fade" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<ApplyToRoom
								img={details.room_url}
								title={details.title}
								price={details.price}
								address={details.address}
								roomId={details.id}
								city={details.city.map(c => c.name)}
							/>
						</div>
					</div>
				</div>
			</div>
			{/*<!-- add ReviewModal Modal -->*/}
			<div id="addReviewModal" className="modal fade" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<AddReview room={details} user={user} />
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="text-center text-warning spiner-loading-data">
			<i className="fas fa-spinner fa-pulse fa-6x" />
		</div>
	);
};
