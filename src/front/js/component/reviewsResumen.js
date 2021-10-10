import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { AddReview } from "../component/addReview";

import "../../styles/detailedView.scss";

export const ReviewsResume = props => {
	const { store } = useContext(Context);
	let { room_id } = useParams();
	const twoFirstReviews = props.tenancies && [props.tenancies[0], props.tenancies[1]];

	return (
		<div className="text-center mb-1" id="reviwsRC">
			<div className="border border-white mt-2 mb-4 white-border-min-heigth">
				<div className="row mt-2 pt-2 text-center" id="titleRewsRes">
					<h5 className="col-12 text-white">Some reviews about this room</h5>
				</div>

				{props.tenancies.length ? (
					twoFirstReviews.map(tenancy => {
						return (
							<div key={tenancy.id} className="row mt-3 d-flex justify-content-around">
								<div className="col-10 reviResContainer ">
									<div className="d-flex">
										<img src={tenancy.renter[0].avatar_url} className="rewImgRe" />
										<div className="ml-2">
											<p className="text-left ml-2 text-white">{tenancy.reviews[0].comment}</p>
										</div>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<p className="text-white mt-5">This room has no reviews yet</p>
				)}

				{store.user?.id === props.details.current_renter && props.tenancies.length ? (
					<div className="row text-center mt-3">
						<div className="col-12 d-flex flex-column">
							<button
								type="button"
								className="navbar btn btnapllyroom ml-5 d-flex justify-content-center"
								data-toggle="modal"
								data-target="#addReviewModal">
								<i
									className="fas fa-plus-square fa-2x text-white change-icon-color"
									aria-hidden="true"></i>{" "}
								&nbsp;&nbsp; <h4 className="textbuttons"> Add Review</h4>
							</button>
							<Link to={`/reviews/${room_id}`}>
								<button className="btn btnYellow mt-1 mb-3 btnYeOwnR2">Read more</button>
							</Link>
						</div>
					</div>
				) : store.user?.id === props.details.current_renter && props.tenancies.length === 0 ? (
					<div className="row text-center mt-3">
						<div className="col-12 d-flex flex-column">
							<button
								type="button"
								className="navbar btn + ml-5 d-flex justify-content-center"
								data-toggle="modal"
								data-target="#addReviewModal">
								<i
									className="fas fa-plus-square fa-2x text-white change-icon-color"
									aria-hidden="true"></i>
								<h4 className="textbuttons">&nbsp;&nbsp; Add Review</h4>
							</button>
						</div>
					</div>
				) : (store.user?.id != props.details.current_renter || store.user == null) && props.tenancies.length ? (
					<div className="row text-center mt-3">
						<div className="col-12 d-flex flex-column">
							<Link to={`/reviews/${room_id}`}>
								<button className="btn btnYellow mt-1 mb-3 btnYeOwnR2">Read more</button>
							</Link>
						</div>
					</div>
				) : null}
			</div>

			{/*<!-- add ReviewModal Modal -->*/}
			<div id="addReviewModal" className="modal fade" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<AddReview room={props.details} user={props.user} />
					</div>
				</div>
			</div>
		</div>
	);
};

ReviewsResume.propTypes = {
	reviews: PropTypes.array,
	roomId: PropTypes.number,
	tenancies: PropTypes.array,
	userId: PropTypes.number,
	details: PropTypes.object,
	user: PropTypes.object
};
