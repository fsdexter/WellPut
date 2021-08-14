import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const NotificationRoomie = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>ACEPTAR AL NUEVO ROOMIE</h1>
		</div>
	);
};
