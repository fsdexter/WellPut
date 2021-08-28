import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export function Counter() {
	const { store, actions } = useContext(Context);

	if (store.roomies < 1) {
		actions.setRoomies(1);
	}
	return (
		<div className="d-flex">
			<button className="mr-2 btn btn-default btn-circle" onClick={() => actions.setRoomies(store.roomies - 1)}>
				<i className="fas fa-minus" />
			</button>{" "}
			<h5>{store.roomies}</h5>
			<button className="ml-2 btn btn-default btn-circle" onClick={() => actions.setRoomies(store.roomies + 1)}>
				<i className="fas fa-plus" />
			</button>{" "}
		</div>
	);
}
