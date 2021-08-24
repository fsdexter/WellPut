import React, { useState } from "react";

export const FilterFea = () => {
	const [features, setFeatures] = useState({
		facingTheStreet: false,
		furnishedRoom: false,
		suiteRoom: false,
		sharedRoom: false
	});

	const onClickHandeler = e => {
		var iten = features[e.target.name];
		if (iten == false) {
			setFeatures({ ...features, [e.target.name]: true });
		} else {
			setFeatures({ ...features, [e.target.name]: false });
		}
	};

	return (
		<div className="row ">
			<div className="col-4">
				<h3 className="ml-4 pt-5 mt-5">Features</h3>
			</div>
			<div className="form-check form-check-inline col-3 mb-5 pl-4 ">
				<input
					className=" form-check-input"
					type="checkbox"
					name="facingTheStreet"
					id="inlineRadio1"
					onClick={onClickHandeler}
				/>
				<label className="form-check-label" htmlFor="inlineRadio1">
					<i className="fas fa-building fa-2x" />
					<br />
					Facing the street
				</label>
			</div>
			<div className="form-check form-check-inline col-3  mb-5 ">
				<input
					className="form-check-input"
					type="checkbox"
					name="furnishedRoom"
					id="inlineRadio2"
					onClick={onClickHandeler}
				/>
				<label className="form-check-label" htmlFor="inlineRadio2">
					<i className="fas fa-couch fa-2x" />
					<br />
					Furnished room
				</label>
			</div>
			<div className="col-4" />
			<div className="form-check form-check-inline col-3  pb-2 pl-4">
				<input
					className=" form-check-input"
					type="checkbox"
					name="suiteRoom"
					id="inlineRadio3"
					onClick={onClickHandeler}
				/>
				<label className="form-check-label " htmlFor="inlineRadio3">
					<i className="fas fa-bath fa-2x" />
					<br />
					Suite Room
				</label>
			</div>
			<div className="form-check form-check-inline col-3  pb-2">
				<input
					className="form-check-input"
					type="checkbox"
					name="sharedRoom"
					id="inlineRadio4"
					onClick={onClickHandeler}
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
