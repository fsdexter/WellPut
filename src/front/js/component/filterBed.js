import React from "react";
import double from "../../img/double.png";
import bedsofa from "../../img/bedsofa.png";

export const FilterBed = () => {
	return (
		<div className="row ">
			<div className="col-4">
				<h3 className="ml-4">Type of bed</h3>
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
					<i className="fas fa-bed fa-2x" />
					Single Bed
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
					<img id="doubleBed" src={double} />
					<br />
					Double Bed
				</label>
			</div>
			<div className="col-4" />
			<div className="form-check form-check-inline col-3  mb-5 pl-4">
				<input
					className=" form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="inlineRadio3"
					value="option3"
				/>
				<label className="form-check-label " htmlFor="inlineRadio3">
					<i className="fas fa-times fa-2x" />
					<br />
					No Bed
				</label>
			</div>
			<div className="form-check form-check-inline col-3  mb-5 ">
				<input
					className="form-check-input"
					type="radio"
					name="inlineRadioOptions"
					id="inlineRadio4"
					value="option4"
				/>
				<label className="form-check-label" htmlFor="inlineRadio4">
					<img id="sofaBed" src={bedsofa} />
					<br />
					Sofa Bed
				</label>
			</div>
		</div>
	);
};
