import React from "react";

export const FilterFea = () => {
	return (
		<div className="row ">
			<div className="col">
				<h3 className="ml-4">Features</h3>
			</div>
			<div className="form-check form-check-inline col-3 mb-5 pl-4 ">
				<input
					className=" form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="inlineRadio1"
					value="option1"
				/>
				<label className="form-check-label" htmlFor="inlineRadio1">
					<i className="fas fa-building fa-2x" />
					Facing the street
				</label>
			</div>
			<div className="form-check form-check-inline col-3  mb-5 ">
				<input
					className="form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="inlineRadio2"
					value="option2"
				/>
				<label className="form-check-label" htmlFor="inlineRadio2">
					<i className="fas fa-couch fa-2x" />
					Furnished room
				</label>
			</div>
		</div>
	);
};
