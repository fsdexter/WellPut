import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { OwnerResume } from "../component/ownerResume";
import { ReviewsResume } from "../component/reviewsResumen";
import { CarouselRoomImg } from "../component/carouselRoomImg";

import "../../styles/detailedView.scss";

export const DetailedView = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row d-flex justify-content-center bg-primary">
				<div className="col-10 ">
					<CarouselRoomImg />
				</div>
			</div>

			<div className="row bg-danger">
				<OwnerResume />
				<ReviewsResume />
			</div>
		</div>
	);
};
