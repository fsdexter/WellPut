import React, { useState, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/applyToRoom.scss";
import roomExample from "../../img/roomDetails.png";
import tenantExample from "../../img/Becker.jpg";

export const ApplyToRoom = () => {
	const { actions } = useContext(Context);
	const closeBtn = useRef(null);

	const closeModalLogin = () => {
		closeBtn.current.click();
	};

	const selectRoomToRoomie = () => {
		console.log("Seleccionó habitación , se le notificara al propietario");
	};

	const aceptRoomie = () => {
		actions.addRoomie();
		closeModalLogin();
	};

	const RefuseRoomie = () => {
		console.log("RECHAZAR AL NUEVO ROOMIE");
		closeModalLogin();
	};

	return (
		<div className="row container text-center d-flex " id="loginContainer">
			<div
				className="iconClose col-12 mt-3  m-0 p-0 d-flex justify-content-end close"
				data-dismiss="modal"
				ref={closeBtn}>
				<i className="far fa-window-close text-white fa-lg" />
			</div>
			<div className="row d-flex justify-content-around">
				<div className="col-8 mt-4">
					<div
						style={{
							backgroundImage: "url(" + roomExample + ")",
							backgroundSize: "cover",
							width: "100%",
							height: "30rem"
						}}></div>
				</div>
				<div className="col-4 mt-4">
					<div>
						traer aqui el detalle de la habitacion mandar a guardar en el id del solicitante , el id de la
						habitacion y un estatus de ppendiente por aprobar , o solicitado
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-around">
				<div className="iconClose col-12 mt-300  m-1500 p-100 d-flex close" data-dismiss="modal">
					<Link to="/detailedView">
						<button className="btn btnYellow mb-5 btnYelloRoom" onClick={() => closeModalLogin()}>
							Confirm
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
