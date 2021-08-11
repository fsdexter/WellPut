import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/announcements.scss";
import my_rooms from "../../img/my_rooms.png";
import { MyRoomsItemActive, MyRoomsItemInactive, MyRoomsItemOccupied } from "../component/myRoomsItem";

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
			<div id="annSquare">
				<ul className="nav nav-tabs mt-3" id="myTab" role="tablist">
					<li className="nav-item" id="tabModi2">
						<a
							className="nav-link active noLink2"
							id="activeR-tab"
							data-toggle="tab"
							href="#activeR"
							role="tab"
							aria-controls="activeR"
							aria-selected="true">
							<h5>Active Rooms</h5>
						</a>
					</li>
					<li className="nav-item" id="tabModi2">
						<a
							className="nav-link noLink2"
							id="inactiveR-tab"
							data-toggle="tab"
							href="#inactiveR"
							role="tab"
							aria-controls="inactiveR"
							aria-selected="false">
							<h5>Inactive Rooms</h5>
						</a>
					</li>
					<li className="nav-item" id="tabModi2">
						<a
							className="nav-link noLink2"
							id="occupiedR-tab"
							data-toggle="tab"
							href="#occupiedR"
							role="tab"
							aria-controls="occupiedR"
							aria-selected="false">
							<h5>Occupied Rooms</h5>
						</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div
						className="tab-pane fade mb-5 show active"
						id="activeR"
						role="tabpanel"
						aria-labelledby="activeR-tab">
						<MyRoomsItemActive />
						<MyRoomsItemActive />
						<MyRoomsItemActive />
					</div>
					<div className="tab-pane fade mb-5" id="inactiveR" role="tabpanel" aria-labelledby="inactiveR-tab">
						<MyRoomsItemInactive />
						<MyRoomsItemInactive />
					</div>
					<div className="tab-pane fade mb-5" id="occupiedR" role="tabpanel" aria-labelledby="occupiedR-tab">
						<MyRoomsItemOccupied />
					</div>
				</div>
			</div>
		</div>
	);
};
