import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/announcements.scss";
import my_rooms from "../../img/my_rooms.png";

export const Announcements = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid announcements ">
			<div className="row">
				<div id="my_room_pic">
					<img id="my_room_pic2" src={my_rooms} />
				</div>
				<div className="col-3">
					<h3 id="my_rooms_title" className="ml-4">
						My Rooms
					</h3>
				</div>

				<div className="col-4" />
				<div className="col-4">
					<button type="button" id="new_ann_button" className="btn btn-warning ml-5">
						New Announcement
					</button>
				</div>
			</div>
		</div>
	);
};
