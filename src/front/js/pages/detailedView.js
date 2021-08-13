import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { OwnerResume } from "../component/ownerResume";
import { ReviewsResume } from "../component/reviewsResumen";
import { CarouselRoomImg } from "../component/carouselRoomImg";

import "../../styles/detailedView.scss";

export const DetailedView = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<CarouselRoomImg />
			<OwnerResume />
			<ReviewsResume />
		</div>
	);
};
