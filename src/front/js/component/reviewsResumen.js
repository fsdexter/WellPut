import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/detailedView.scss";

export const ReviewsResume = props => {
	const { store, actions } = useContext(Context);
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
										<img src={tenancy.user[0].avatar_url} className="rewImgRe" />
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

				{props.tenancies.length ? (
					<div className="row text-center mt-5">
						<div className="col-12">
							<Link to={`/reviews/${room_id}`}>
								<button className="btn btnYellow mt-1 mb-3 btnYeOwnR2">Read more</button>
							</Link>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

ReviewsResume.propTypes = {
	reviews: PropTypes.array,
	roomId: PropTypes.number,
	tenancies: PropTypes.array
};
