import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import ownerImg from "../../img/women.jpg";
import "../../styles/detailedView.scss";

export const OwnerResume = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column">
			<div className="row d-flex justify-content-end">
				<img src={ownerImg} className="col-10" id="ownerIMG" />
			</div>
			<div className="row d-flex justify-content-end">
				<div className="col-10 d-flex flex-column p-1 mt-2 ownRes">
					<div className="text-center" id="owneReContainer">
						<p className="text-white p-3">Cheerful, sociable and animal-loving girl</p>
						<Link to="/profile">
							<button className="btn btnYellow mt-4 mb-5 btnYeOwnR">Know more about Mía</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
