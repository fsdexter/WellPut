import React, { useState, useContext, useRef, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/notifications.scss";

export const Notifications = () => {
	//const { img, title, price, address, city, roomId } = props;
	const { actions } = useContext(Context);
	const closeBtn = useRef(null);

	const closeModalLogin = () => {
		closeBtn.current.click();
	};

	return (
		<div className="row container text-center" id="ContainerAplytoRoom">
			MODAL DE LAS NOTIFICACIONES: - DATOS DEL USUARIO QUE APLICA - HABITACIÓN A LA QUE APLICA
		</div>
	);
};
