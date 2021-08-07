import React from "react";

export const FilterFea = () => {
	return (
		<div className="row ">
			<div className="col-4">
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
					<i className="fas fa-bath fa-2x" />
					<br />
					Suite Room
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
					<i className="fab fa-slideshare fa-2x" />
					<br />
					Shared Room
				</label>
			</div>
		</div>
	);
};
