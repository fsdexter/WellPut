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
			<div id="annSquare">
				<ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
					<li className="nav-item" id="tabModi2">
						<a
							className="nav-link active noLink2"
							id="home-tab"
							data-toggle="tab"
							href="#home"
							role="tab"
							aria-controls="home"
							aria-selected="true">
							<h5>Active Rooms</h5>
						</a>
					</li>
					<li className="nav-item" id="tabModi2">
						<a
							className="nav-link noLink2"
							id="profile-tab"
							data-toggle="tab"
							href="#profile"
							role="tab"
							aria-controls="profile"
							aria-selected="false">
							<h5>Inactive Rooms</h5>
						</a>
					</li>
					<li className="nav-item" id="tabModi2">
						<a
							className="nav-link noLink2"
							id="contact-tab"
							data-toggle="tab"
							href="#contact"
							role="tab"
							aria-controls="contact"
							aria-selected="false">
							<h5>Occupied Rooms</h5>
						</a>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
						Exterior room with double bed and private bathroom in the Salamanca district, very bright, fully
						equipped and with all the comforts. Young and calm environment, NO SMOKING, NO COUPLES.
						Unbeatable location near the metro, bus and other local shops.
					</div>
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						Exterior room with double bed and private bathroom in the Salamanca district, very bright, fully
						equipped and with all the comforts. Young and calm environment, NO SMOKING, NO COUPLES.
						Unbeatable location near the metro, bus and other local shops.
					</div>
					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						Exterior room with double bed and private bathroom in the Salamanca district, very bright, fully
						equipped and with all the comforts. Young and calm environment, NO SMOKING, NO COUPLES.
						Unbeatable location near the metro, bus and other local shops.
					</div>
				</div>
			</div>
		</div>
	);
};
