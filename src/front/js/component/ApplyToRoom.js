import React, { useState, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/applyToRoom.scss";
import roomExample from "../../img/roomDetails.png";
import tenantExample from "../../img/Becker.jpg";

export const ApplyToRoom = props => {
	const { img, title, price, address, city, roomId } = props;
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
	console.log(img, title, price, address);
	return (
		<div className="row container text-center  " id="loginContainer">
			<div
				className="iconClose col-12 mt-3  m-0 p-0 d-flex justify-content-end close"
				data-dismiss="modal"
				ref={closeBtn}>
				<i className="far fa-window-close text-white fa-lg" />
			</div>
			<div className=" col-12 mt-3  m-0 p-0 d-flex text-white ">
				<h2>{title}</h2>
			</div>
			<div className="row d-flex justify-content-around">
				<div className="col-12 mt-3  m-0 p-0 d-flex justify-content-end close">
					<div
						className="col-10 mt-4"
						style={{
							backgroundImage: `url(${img})`,
							backgroundSize: "cover",
							width: "30rem",
							height: "30rem"
						}}></div>
					<div className="col-5 mt-4">
						<p>{price}</p>
						<p>{address}</p>
						<p>{city}</p>
					</div>
				</div>
			</div>
			<div className="col-12 mt-3  m-0 p-0 d-flex ">
				<Link to="/detailedView">
					<button className="btn btnYellow mb-5 btnYelloRoom" onClick={() => closeModalLogin()}>
						Confirm
					</button>
				</Link>
			</div>
		</div>
	);
};
ApplyToRoom.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.string,
	address: PropTypes.string,
	city: PropTypes.string,
	roomId: PropTypes.int
};
