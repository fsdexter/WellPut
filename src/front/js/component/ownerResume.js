import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/detailedView.scss";

export const OwnerResume = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>OWNER RESUME</h1>
		</div>
	);
};
