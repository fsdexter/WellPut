import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import review1 from "../../img/review1.png";
import review2 from "../../img/review2.png";
import "../../styles/detailedView.scss";

export const Reviews = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mb-1" id="reviwsRC">
			FUTURA PVISTA DE LOS COMENTARIOS!!!
		</div>
	);
};
