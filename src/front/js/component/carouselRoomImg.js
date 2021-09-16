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
			to="/detailedView">
			<div className="carHome">
				<div
					className={
						props.isDetailRoom ? "carousel-inner d-flex caroShapeCustom" : "carousel-inner d-flex caroShape"
					}>
					<div className="carousel-item active ">
						<img className="d-block w-100 caro_pic_fix" src={props.room.room_url} />;
						<div className="carousel-caption">
							<h4 className="maybeWorks">{props.room.title} </h4>
							<div className={props.isDetailRoom ? "row rowCustom d-flex justify-content-center" : "row"}>
								<div className={props.isDetailRoom ? "caroPriceCustom" : "caroPrice"}>
									<h2>{props.room.price} €</h2>
								</div>

								{props.room.tenancies.map(tenancy => {
									return (
										<div key={tenancy.id}>
											<div
												className={
													props.isDetailRoom
														? "starCaroCustom d-flex justify-content-around"
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
// export const CarouselRoomImg2 = () => {
// 	const { store, actions } = useContext(Context);
// 	const slider = (
// 		<div>
// 			<div id="carouselTwo" className="carousel slide" data-ride="carousel" data-interval="false">
// 				<div className="carousel-inner caroShape d-flex">
// 					<div className="carousel-item  active ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails1} alt="First slide" />
// 						<div className="carousel-caption ">
// 							<h4 className="maybeWorks">{titleExple} </h4>
// 							{/**/}
// 							<div className=" row">
// 								<div className="caroPrice">
// 									<h2>€{priceExple}</h2>
// 								</div>
// 								<div className="starCaro">
// 									<RatingStatic />
// 								</div>
// 								<div className="heartButton">
// 									<button className="heartButtonFix">
// 										{" "}
// 										<i className="far fa-heart fa-2x" />
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="carousel-item  ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails2} alt="Second slide" />
// 						<div className="carousel-caption ">
// 							<h4 className="maybeWorks">{titleExple} </h4>
// 							{/**/}
// 							<div className=" row">
// 								<div className="caroPrice">
// 									<h2>€{priceExple}</h2>
// 								</div>
// 								<div className="starCaro">
// 									<RatingStatic />
// 								</div>
// 								<div className="heartButton">
// 									<button className="heartButtonFix">
// 										{" "}
// 										<i className="far fa-heart fa-2x" />
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="carousel-item ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails3} alt="Third slide" />
// 						<div className="carousel-caption ">
// 							<h4 className="maybeWorks">{titleExple} </h4>
// 							{/**/}
// 							<div className=" row">
// 								<div className="caroPrice">
// 									<h2>€{priceExple}</h2>
// 								</div>
// 								<div className="starCaro">
// 									<RatingStatic />
// 								</div>
// 								<div className="heartButton">
// 									<button className="heartButtonFix">
// 										{" "}
// 										<i className="far fa-heart fa-2x" />
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<a className="carousel-control-prev" href="#carouselTwo" role="button" data-slide="prev">
// 					<span className="carousel-control-prev-icon" aria-hidden="true" />
// 					<span className="sr-only">Previous</span>
// 				</a>
// 				<a className="carousel-control-next" href="#carouselTwo" role="button" data-slide="next">
// 					<span className="carousel-control-next-icon" aria-hidden="true" />
// 					<span className="sr-only">Next</span>
// 				</a>
// 			</div>
// 		</div>
// 	);

// 	return slider;
// };
// export const CarouselRoomImg3 = () => {
// 	const { store, actions } = useContext(Context);
// 	const slider = (
// 		<div>
// 			<div id="carouselThree" className="carousel slide" data-ride="carousel" data-interval="false">
// 				<div className="carousel-inner caroShape d-flex">
// 					<div className="carousel-item  active ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails1} alt="First slide" />
// 						<div className="carousel-caption ">
// 							<h4 className="maybeWorks">{titleExple} </h4>
// 							{/**/}
// 							<div className=" row">
// 								<div className="caroPrice">
// 									<h2>€{priceExple}</h2>
// 								</div>
// 								<div className="starCaro">
// 									<RatingStatic />
// 								</div>
// 								<div className="heartButton">
// 									<button className="heartButtonFix">
// 										{" "}
// 										<i className="far fa-heart fa-2x" />
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="carousel-item  ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails2} alt="Second slide" />
// 						<div className="carousel-caption ">
// 							<h4 className="maybeWorks">{titleExple} </h4>
// 							{/**/}
// 							<div className=" row">
// 								<div className="caroPrice">
// 									<h2>€{priceExple}</h2>
// 								</div>
// 								<div className="starCaro">
// 									<RatingStatic />
// 								</div>
// 								<div className="heartButton">
// 									<button className="heartButtonFix">
// 										{" "}
// 										<i className="far fa-heart fa-2x" />
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="carousel-item ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails3} alt="Third slide" />
// 						<div className="carousel-caption ">
// 							<h4 className="maybeWorks">{titleExple} </h4>
// 							{/**/}
// 							<div className=" row">
// 								<div className="caroPrice">
// 									<h2>€{priceExple}</h2>
// 								</div>
// 								<div className="starCaro">
// 									<RatingStatic />
// 								</div>
// 								<div className="heartButton">
// 									<button className="heartButtonFix">
// 										{" "}
// 										<i className="far fa-heart fa-2x" />
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<a className="carousel-control-prev" href="#carouselThree" role="button" data-slide="prev">
// 					<span className="carousel-control-prev-icon" aria-hidden="true" />
// 					<span className="sr-only">Previous</span>
// 				</a>
// 				<a className="carousel-control-next" href="#carouselThree" role="button" data-slide="next">
// 					<span className="carousel-control-next-icon" aria-hidden="true" />
// 					<span className="sr-only">Next</span>
// 				</a>
// 			</div>
// 		</div>
// 	);

// 	return slider;
// };
// export const CarouselRoomImg4 = () => {
// 	const { store, actions } = useContext(Context);
// 	const slider = (
// 		<div>
// 			<div id="carouselFour" className="carousel slide" data-ride="carousel" data-interval="false">
// 				<div className="carousel-inner caroShape d-flex">
// 					<div className="carousel-item  active ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails1} alt="First slide" />
// 						<div className="carousel-caption ">
// 							<h4 className="maybeWorks">{titleExple} </h4>
// 							{/**/}
// 							<div className=" row">
// 								<div className="caroPrice">
// 									<h2>€{priceExple}</h2>
// 								</div>
// 								<div className="starCaro">
// 									<RatingStatic />
// 								</div>
// 								<div className="heartButton">
// 									<button className="heartButtonFix">
// 										{" "}
// 										<i className="far fa-heart fa-2x" />
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="carousel-item  ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails2} alt="Second slide" />
// 						<div className="carousel-caption ">
// 							<h4 className="maybeWorks">{titleExple} </h4>
// 							{/**/}
// 							<div className=" row">
// 								<div className="caroPrice">
// 									<h2>€{priceExple}</h2>
// 								</div>
// 								<div className="starCaro">
// 									<RatingStatic />
// 								</div>
// 								<div className="heartButton">
// 									<button className="heartButtonFix">
// 										{" "}
// 										<i className="far fa-heart fa-2x" />
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="carousel-item ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails3} alt="Third slide" />
// 						<div className="carousel-caption ">
// 							<h4 className="maybeWorks">{titleExple} </h4>
// 							{/**/}
// 							<div className=" row">
// 								<div className="caroPrice">
// 									<h2>€{priceExple}</h2>
// 								</div>
// 								<div className="starCaro">
// 									<RatingStatic />
// 								</div>
// 								<div className="heartButton">
// 									<button className="heartButtonFix">
// 										{" "}
// 										<i className="far fa-heart fa-2x" />
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<a className="carousel-control-prev" href="#carouselFour" role="button" data-slide="prev">
// 					<span className="carousel-control-prev-icon" aria-hidden="true" />
// 					<span className="sr-only">Previous</span>
// 				</a>
// 				<a className="carousel-control-next" href="#carouselFour" role="button" data-slide="next">
// 					<span className="carousel-control-next-icon" aria-hidden="true" />
// 					<span className="sr-only">Next</span>
// 				</a>
// 			</div>
// 		</div>
// 	);

// 	return slider;
// };
// export const CarouselRoomImg5 = () => {
// 	const { store, actions } = useContext(Context);
// 	const slider = (
// 		<div>
// 			<div id="carouselFive" className="carousel slide" data-ride="carousel" data-interval="false">
// 				<div className="carousel-inner caroShape d-flex">
// 					<div className="carousel-item  active ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails1} alt="First slide" />
// 						<div className="carousel-caption ">
// 							<h4 className="maybeWorks">{titleExple} </h4>
// 							{/**/}
// 							<div className=" row">
// 								<div className="caroPrice">
// 									<h2>€{priceExple}</h2>
// 								</div>
// 								<div className="starCaro">
// 									<RatingStatic />
// 								</div>
// 								<div className="heartButton">
// 									<button className="heartButtonFix">
// 										{" "}
// 										<i className="far fa-heart fa-2x" />
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="carousel-item  ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails2} alt="Second slide" />
// 						<div className="carousel-caption " />
// 					</div>
// 					<div className="carousel-item ">
// 						<img className="d-block w-100 caro_pic_fix" src={roomDetails3} alt="Third slide" />
// 						<div className="carousel-caption" />
// 					</div>
// 				</div>
// 				<a className="carousel-control-prev" href="#carouselFive" role="button" data-slide="prev">
// 					<span className="carousel-control-prev-icon" aria-hidden="true" />
// 					<span className="sr-only">Previous</span>
// 				</a>
// 				<a className="carousel-control-next" href="#carouselFive" role="button" data-slide="next">
// 					<span className="carousel-control-next-icon" aria-hidden="true" />
// 					<span className="sr-only">Next</span>
// 				</a>
// 			</div>
// 		</div>
// 	);

// 	return slider;
// };

CarouselRoomImg.propTypes = {
	isDetailRoom: PropTypes.bool
};

CarouselRoomImg.defaultProps = {
	isDetailRoom: false
};

CarouselRoomImg.propTypes = {
	room: PropTypes.object
};
