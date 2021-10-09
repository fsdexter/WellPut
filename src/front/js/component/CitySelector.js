import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CitySelector = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm">
					<input
						className=" form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio1"
						value="Madrid"
						onClick={() => actions.setCity("Madrid")}
					/>
					<label className="form-check-label" htmlFor="inlineRadio1">
						Madrid
					</label>
				</div>
				<div className="col-sm">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio2"
						value="Barcelona"
						onClick={() => actions.setCity("Barcelona")}
					/>
					<label className="form-check-label" htmlFor="inlineRadio2">
						Barcelona
					</label>
				</div>
				<div className="col-sm">
					<input
						className=" form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio3"
						value="Málaga "
						onClick={() => actions.setCity("Málaga")}
					/>
					<label className="form-check-label " htmlFor="inlineRadio3">
						Málaga
					</label>
				</div>
			</div>
		</div>
	);
};
