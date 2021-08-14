import React, { useContext } from "react";
import { Context } from "../store/appContext";

import ownerImg from "../../img/mia.png";
import "../../styles/detailedView.scss";

export const OwnerResume = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column">
			<div className="row d-flex justify-content-end">
				<img src={ownerImg} className="col-10" />
			</div>
			<div className="row d-flex justify-content-end">
				<div className="col-10 d-flex flex-column p-4 mt-2" id="ownRes">
					<p className="text-white p-3">Cheerful, sociable and animal-loving girl</p>
					<button className="btn btnYellow mt-4" id="btnYeOwnR">
						Know more about Mía
					</button>
				</div>
			</div>
		</div>
	);
};
