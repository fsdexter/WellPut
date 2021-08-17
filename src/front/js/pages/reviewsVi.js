import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import review1 from "../../img/review1.png";
import review2 from "../../img/review2.png";
import "../../styles/detailedView.scss";

export const Reviews = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="row">top row</div>
				<div className="row d-flex">
					<div className="col-6">
						<h4>proprietari reviw</h4>
						<div className="d-flex">
							<div className="imgbox">imagi box</div>
							<div>text box</div>
						</div>
						<div className="d-flex">
							<div className="imgbox">imagi box</div>
							<div>text box</div>
						</div>
						<div className="d-flex">
							<div className="imgbox">imagi box</div>
							<div>text box</div>
						</div>
					</div>
					<div className="col-6">
						<h4>oner reviw</h4>
						<div className="d-flex">
							<div className="imgbox">imagi box</div>
							<div>text box</div>
						</div>
						<div className="d-flex">
							<div className="imgbox">imagi box</div>
							<div>text box</div>
						</div>
						<div className="d-flex">
							<div className="imgbox">imagi box</div>
							<div>text box</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
