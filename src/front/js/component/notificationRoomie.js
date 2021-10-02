import React, { useState, useContext, useRef, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/notificationRoomie.scss";
import roomExample from "../../img/roomDetails.png";
import tenantExample from "../../img/Becker.jpg";

export const NotificationRoomie = props => {
	const { actions } = useContext(Context);
	const closeBtn = useRef(null);
	const [userInterested, setUserInterested] = useState();

	const closeModalLogin = () => {
		closeBtn.current.click();
	};

	const selectRoomToRoomie = () => {
		console.log("Se seleccionó una habitación para el nuevo inquilino");
	};

	const aceptRoomie = () => {
		actions.addRoomie();
		closeModalLogin();
	};

	const RefuseRoomie = () => {
		console.log("RECHAZAR AL NUEVO ROOMIE");
		closeModalLogin();
	};

	let roomToRent = props.rooms.filter(room => room.temporal_renter !== null);
	console.log("HABITACIÓN CON USUARIO INTERESADO", roomToRent);

	let userAppliedId;
	roomToRent.filter(user => (userAppliedId = user.temporal_renter));

	useEffect(() => {
		getUserApplied();
	}, []);

	const getUserApplied = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/api/profile/${userAppliedId}`);
			const renter = await response.json();
			setUserInterested(renter);
			localStorage.setItem("renter", JSON.stringify(renter));
		} catch (error) {
			return error.message;
		}
	};

	console.log("USUARIO INTERESADO : ", userInterested);

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
					<div
						className="d-flex flex-column text-center"
						style={{
							backgroundImage: "url(" + tenantExample + ")",
							backgroundSize: "cover",
							width: "100%",
							height: "100%"
						}}>
						<div className="onIMNewRoomie pl-3 pt-5">
							<div className="col-12 text-white mb-3">
								<h3>
									<strong>Jason Becker</strong> wants to be your roomie
								</h3>
							</div>
							<div className="d-flex justify-content-center">
								<Link to="/profile">
									<button
										className="btn btnYellow mt-4 mb-5 btnYeOwnR"
										onClick={() => closeModalLogin()}>
										Show her/his profile
									</button>
								</Link>
							</div>
							<div className="col-12 text-white mt-5 mb-5">
								<h5>
									Select the room where <strong>Jason Becker</strong> will live *
								</h5>
							</div>
							<div className="col-12" id="addOrNot">
								<div className="text-white">
									<h5>Add him/her as a roomie? *</h5>
								</div>
								<div className="d-flex justify-content-center">
									<div className="col-12 d-flex flex-column">
										<button className="btn btnGreen mt-4" onClick={() => aceptRoomie()}>
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
				</div>
				<div className="col-5 mt-4">
					<div
						className="d-flex flex-column"
						style={{
							backgroundImage: "url(" + roomExample + ")",
							backgroundSize: "cover",
							width: "25rem",
							height: "13rem"
						}}>
						<i className="far fa-square fa-2x iconToSelectRoom" onClick={() => selectRoomToRoomie()} />
						<Link to="/detailedView">
							<button className="btn btnYellow mb-5 btnYelloRoom" onClick={() => closeModalLogin()}>
								Show room
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

NotificationRoomie.propTypes = {
	rooms: PropTypes.array
};
