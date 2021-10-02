import React, { useState, useContext, useRef, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/notificationRoomie.scss";

export const NotificationRoomie = props => {
	const { actions } = useContext(Context);
	const closeBtn = useRef(null);
	const [renter, setRenter] = useState();

	const closeModalLogin = () => {
		closeBtn.current.click();
	};

	const aceptRoomie = (userId, roomId) => {
		fetch(`${API_BASE_URL}/api/add-roomie/${userId}/${roomId}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: userId,
				room_id: roomId
			})
		})
			.then(res => res.json())
			.then(data => console.log(data, "Apply Romie"));

		closeModalLogin();
	};

	const RefuseRoomie = () => {
		console.log("RECHAZAR AL NUEVO ROOMIE");
		closeModalLogin();
	};

	let roomToRent = props.rooms.filter(room => room.temporal_renter !== null);
	let userAppliedId;
	roomToRent.filter(user => (userAppliedId = user.temporal_renter));

	useEffect(() => {
		getUserApplied();
	}, []);

	const getUserApplied = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/api/user-profile/${userAppliedId}`);
			const renter = await response.json();
			setRenter(renter);
			localStorage.setItem("renter", JSON.stringify(renter));
		} catch (error) {
			return error.message;
		}
	};

	return (
		<div className="row container text-center d-flex flex-column container-modals">
			<div
				className="iconClose mt-3  m-0 p-0 d-flex justify-content-end close"
				data-dismiss="modal"
				ref={closeBtn}>
				<i className="far fa-window-close text-white fa-lg" />
			</div>
			<div className="row d-flex justify-content-around">
				<div className="col-6" id="containerAddRoomie">
					{renter ? (
						<div
							className="d-flex flex-column text-center"
							style={{
								backgroundImage: "url(" + renter.avatar_url + ")",
								backgroundSize: "cover",
								width: "100%",
								height: "100%"
							}}>
							<div className="onIMNewRoomie pl-3 pt-5">
								<div className="col-12 text-white mb-3">
									<h3>
										<strong>
											{renter.name} {renter.last_name} &nbsp;
										</strong>
										wants to be your roomie
									</h3>
								</div>
								<div className="col-12" id="addOrNot">
									<div className="d-flex justify-content-center">
										<Link to={`/user-profile/${renter.id}`}>
											<button
												className="btn btnYellow mt-4 mb-2 btnYeOwnR"
												onClick={() => closeModalLogin()}>
												{renter.gender === "male" ? "Show his profile" : "Show her profile"}
											</button>
										</Link>
									</div>
									<div className="text-white mt-2">
										<h5>
											{renter.gender === "male"
												? "Add him as a roomie? *"
												: "Add her as a roomie? *"}
										</h5>
									</div>
									<div className="d-flex justify-content-center">
										<div className="col-12 d-flex flex-column">
											<button
												className="btn btnGreen mt-4"
												onClick={() => aceptRoomie(renter.id, roomToRent[0].id)}>
												Accept
											</button>
											<button className="btn btnRed mt-4" onClick={() => RefuseRoomie()}>
												Refuse
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : (
						"You do not have any notification"
					)}
				</div>
				<div className="col-5 mt-1">
					{roomToRent[0] ? (
						<div
							className="d-flex flex-column"
							style={{
								backgroundImage: "url(" + roomToRent[0].room_url + ")",
								backgroundSize: "cover",
								width: "95%",
								height: "100%"
							}}>
							<Link to={`/detailedView/${roomToRent[0].id}`}>
								<button className="btn btnYellow mb-5 btnYelloRoom" onClick={() => closeModalLogin()}>
									Show room
								</button>
							</Link>
						</div>
					) : (
						"You do not have any notification"
					)}
				</div>
			</div>
		</div>
	);
};

NotificationRoomie.propTypes = {
	rooms: PropTypes.array
};
