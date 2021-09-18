import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import review1 from "../../img/review1.png";
import review2 from "../../img/review2.png";
import "../../styles/detailedView.scss";

export const ReviewsResume = props => {
	const { store, actions } = useContext(Context);
	let { room_id } = useParams();

	const twoFirstReviews = props.tenancies && [props.tenancies[0], props.tenancies[1]];

	console.log("TENANCIES por props: ", props.tenancies);
	console.log("twoFirstReviews", twoFirstReviews);

	return (
		<div className="text-center mb-1" id="reviwsRC">
			<div className="border border-white mt-2 mb-4">
				<div className="row mt-2 pt-2 text-center" id="titleRewsRes">
					<h5 className="col-12 text-white">Some reviews about this room</h5>
				</div>

				{props.tenancies.length
					? twoFirstReviews.map(tenancy => {
							return (
								<div key={tenancy.id} className="row mt-1 p-2 d-flex justify-content-around">
									<div className="col-5 reviResContainer p-3 ">
										<div className="d-flex justify-content-around">
											<img src={tenancy.user[0].avatar_url} className="rewImgRe" />;
											<div className="d-flex flex-column">
												<p className="text-left ml-2 text-white">
													{tenancy.reviews[0].comment}
												</p>
											</div>
										</div>
									</div>
								</div>
							);
					  })
					: "This room has no reviews yet"}

				{/* {props.tenancies ? (
					props.tenancies.map(tenancy => {
						//USANDO LAS TENANCIES POR PROPS
						tenancy.room_id === room_id ? (
							<div className="row mt-1 p-2 d-flex justify-content-around">
								<div className="col-5 reviResContainer p-3 ">
									<div className="d-flex justify-content-around">
										<img
											key={tenancy.user[0].id}
											src={tenancy.user[0].avatar_url}
											className="rewImgRe"
										/>
										;
										<div className="d-flex flex-column">
											<p className="text-left ml-2 text-white">{tenancy.reviews[0].comment}</p>
										</div>
									</div>
								</div>
							</div>
						) : null;
					})
				) : (
					<p>This room has no reviews yet</p>
				)} */}

				{/* {props.reviews ? (
					<div className="row mt-1 p-2 d-flex justify-content-around">
						<div className="col-5 reviResContainer p-3 ">
							<div className="d-flex justify-content-around">
								{JSON.parse(localStorage.getItem("tenanciesRoom"))
									? JSON.parse(localStorage.getItem("tenanciesRoom")).map(tenancy => {
											Array.isArray(tenancy.user) ? (
												tenancy.user.map(user => {
													<img key={user.id} src={user.avatar_url} className="rewImgRe" />;
												})
											) : (
												<img src={tenancy.user.avatar_url} className="rewImgRe" />
											);
									  })
									: null}

								<div className="d-flex flex-column">
									<p className="text-left ml-2 text-white">{props.reviews[0]?.comment}</p>
								</div>
							</div>
						</div>

						<div className="col-5  reviResContainer p-3">
							<div className="d-flex justify-content-around">
								<img src={review2} className="rewImgRe" />
								<div className="d-flex flex-column">
									<p className="text-left ml-2 text-white">{props.reviews[1]?.comment}</p>
								</div>
							</div>
						</div>
					</div>
				) : (
					<p>This room has no reviews yet</p>
				)} */}

				{/* {tenanciesRoom ? (
					tenanciesRoom.map(tenancy => {
						props.reviews ? (
							<div className="row mt-1 p-2 d-flex justify-content-around">
								<div className="col-5 reviResContainer p-3">
									<div className="d-flex justify-content-around">
										<img src={tenancy.user.avatar_url} className="rewImgRe" />
										<div className="d-flex flex-column">
											<p className="text-left ml-2 text-white">{props.reviews[0]?.comment}</p>
										</div>
									</div>
								</div>

								<div className="col-5  reviResContainer p-3">
									<div className="d-flex justify-content-around">
										<img src={review2} className="rewImgRe" />
										<div className="d-flex flex-column">
											<p className="text-left ml-2 text-white">{props.reviews[1]?.comment}</p>
										</div>
									</div>
								</div>
							</div>
						) : (
							<p>This room has no reviews yet</p>
						);
					})
				) : (
					<p>This room has no reviews yet</p>
				)} */}

				<div className="row text-center">
					<div className="col-12">
						<Link to={`/reviews/${room_id}`}>
							<button className="btn btnYellow mt-1 mb-3 btnYeOwnR2">Read more</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

ReviewsResume.propTypes = {
	reviews: PropTypes.array,
	roomId: PropTypes.number,
	tenancies: PropTypes.array
};
