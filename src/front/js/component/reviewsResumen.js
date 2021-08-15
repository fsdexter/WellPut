import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import review1 from "../../img/review1.png";
import review2 from "../../img/review2.png";
import "../../styles/detailedView.scss";

export const ReviewsResume = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mb-1" id="reviwsRC">
			<div className="border border-white mt-2 mb-4">
				<div className="row mt-2 pt-2 text-center" id="titleRewsRes">
					<h5 className="col-6 text-white">The property reviews</h5>
					<h5 className="col-6 text-white">About the owner</h5>
				</div>
				<div className="row mt-1 p-2 d-flex justify-content-around">
					<div className="col-5 reviResContainer p-3">
						<div className="d-flex justify-content-around">
							<img src={review1} className="rewImgRe" />
							<p className="text-left ml-2 text-white">
								The neighborhood is great, it is well connected by public transport, the metro is 5
								minutes away and there are many nice areas to hang out.
							</p>
						</div>
					</div>

					<div className="col-5  reviResContainer p-3">
						<div className="d-flex justify-content-around">
							<img src={review2} className="rewImgRe" />
							<p className="text-left ml-2 text-white">
								Living with Mia is the best. She is a very nice girl who helps you with everything you
								need. I recommend her as a partner 100%!!
							</p>
						</div>
					</div>
				</div>
				<div className="row text-center">
					<div className="col-12">
						<Link to="/reviews">
							<button className="btn btnYellow mt-1 mb-3 btnYeOwnR2">Read more</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
