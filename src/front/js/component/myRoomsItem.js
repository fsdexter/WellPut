import React, { useContext } from "react";
import "../../styles/announcements.scss";
import openEye from "../../img/openEye.png";
import closeEye from "../../img/closeEye.png";
import deleteRoom from "../../img/deleteRoom.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const MyRoomsItemActive = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="row">
			<div className="third_part mx-auto mt-3 mb-2">
				<div className="row pl-3 pr-3">
					<div className={props.room.current_renter_details.avatar_url ? "col-5 mt-4" : "col-7 mt-4"}>
						<div className="ml-2 mb-4">
							<h5 className="fontRoom">{props.room.title}</h5>
						</div>
						<p className="ml-2 fontRoom">{props.room.description}</p>
						<h5 className="fontRoom ml-2 ">Price: €{props.room.price}</h5>
						<h5 className="fontRoom ml-2 ">Deposit: €{props.room.deposit}</h5>
					</div>
					<div className="col-3 roomItemBar">
						<Link to={`/detailedView/${props.room.id}`}>
							<img className="roomItemPic" src={props.room.room_url} href="#" />
						</Link>
					</div>

					{props.room.current_renter_details.avatar_url ? (
						<div className="col-3 roomItemBar">
							<img className="roomItemPic" src={props.room.current_renter_details.avatar_url} href="#" />
						</div>
					) : (
						""
					)}

					<div className="col d-flex flex-column btn-icons-annonc">
						<button
							type="button"
							className="btn btn-outline-warning roomsButtons mt-4 mx-auto"
							alt="click to set room inactive"
							data-toggle="tooltip"
							data-placement="top"
							title="Deactivate/Activate"
							onClick={() => {
								actions.setRoomActive(props.room.id);
							}}>
							{props.room.current_renter_details.avatar_url ? (
								<i className="fa fa-user-times fa-2x" aria-hidden="true"></i>
							) : (
								<img src={props.room.active_room ? closeEye : openEye} className="closedEye" />
							)}
						</button>

						<button
							type="button"
							className="btn btn-outline-warning mt-5 roomsButtons mx-auto"
							data-toggle="tooltip"
							data-placement="top"
							title="Delete"
							onClick={() => {
								actions.setRoomDelete(props.room.id);
							}}>
							<img src={deleteRoom} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
MyRoomsItemActive.propTypes = {
	room: PropTypes.object
};
