import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { AddReview } from "../component/addReview";
import { NotificationRoomie } from "../component/notificationRoomie";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Profile page</h1>
			<div className="d-flex justify-content-around">
				<button
					type="button"
					className="navbar-brand mb-0 mr-2 btn btn-navb"
					data-toggle="modal"
					data-target="#addReviewModal">
					Add review
				</button>
				<button
					type="button"
					className="navbar-brand mb-0 mr-2 btn btn-navb"
					data-toggle="modal"
					data-target="#notificationModal">
					Notification New Rommie
				</button>
			</div>

			{/*<!-- add ReviewModal Modal -->*/}
			<div id="addReviewModal" className="modal fade" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<AddReview />
					</div>
				</div>
			</div>

			{/*<!-- notification Modal -->*/}
			<div id="notificationModal" className="modal fade" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<NotificationRoomie />
					</div>
				</div>
			</div>
		</div>
	);
};
