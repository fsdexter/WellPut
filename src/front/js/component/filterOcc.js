import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const FilterOcc = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="row ">
			<div className="col">
				<h3 className="ml-4">Occupation</h3>
			</div>
			<div className="form-check form-check-inline col-3 mb-5 pl-4 ">
				<input
					className=" form-check-input"
					type="checkbox"
					name="worker"
					id="inlineRadio1"
					value="option1"
					onClick={e => {
						actions.onClickHandeler(e);
					}}
				/>
				<label className="form-check-label" htmlFor="inlineRadio1">
					<i className="fas fa-briefcase fa-2x" />
				</label>
			</div>
			<div className="form-check form-check-inline col-3  mb-5 ">
				<input
					className="form-check-input"
					type="checkbox"
					name="estudente"
					id="inlineRadio2"
					value="option2"
					onClick={e => {
						actions.onClickHandeler(e);
					}}
				/>
				<label className="form-check-label" htmlFor="inlineRadio2">
					<i className="fas fa-user-graduate fa-2x" />
				</label>
			</div>
		</div>
	);
};
