import React from "react";

export const FilterExp = () => {
	return (
		<div className="row">
			<div className="col-4">
				<h3 className="ml-4 pt-5">
					Expenses
					<br />
					included
				</h3>
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
					<i className="fas fa-wifi fa-2x" />
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
					<i className="fas fa-shower fa-2x" />
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
					<i className="fas fa-burn fa-2x pb-3 " />
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
					<i className="far fa-lightbulb fa-2x pb-3" />
				</label>
			</div>
		</div>
	);
};
