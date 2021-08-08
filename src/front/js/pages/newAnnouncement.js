import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/newAnnouncement.scss";
import maps from "../../img/maps.png";

export const NewAnnouncement = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="nav nav-tabs " id="myTab" role="tablist">
				<li className="nav-item">
					<a
						className="nav-link active noLink"
						id="locationTab-tab"
						data-toggle="tab"
						href="#locationTab"
						role="tab"
						aria-controls="locationTab"
						aria-selected="true">
						<h5>Location</h5>
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link noLink"
						id="descriptionTab-tab"
						data-toggle="tab"
						href="#descriptionTab"
						role="tab"
						aria-controls="descriptionTab"
						aria-selected="false">
						Description
					</a>
				</li>
				<li className="nav-item ">
					<a
						className="nav-link noLink"
						id="picsTab-tab"
						data-toggle="tab"
						href="#picsTab"
						role="tab"
						aria-controls="picsTab"
						aria-selected="false">
						Pictures
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link noLink"
						id="previewTab-tab"
						data-toggle="tab"
						href="#previewTab"
						role="tab"
						aria-controls="previewTab"
						aria-selected="false">
						Preview
					</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div
					className="tab-pane fade show active"
					id="locationTab"
					role="tabpanel"
					aria-labelledby="locationTab-tab">
					<div className="row">
						<div className="col-2 pt-3 fontInput">
							<p className="pl-4">City </p>
							<p className="pl-4">Street</p>
							<p className="pl-4">Number</p>
						</div>
						<div className="col pt-3">
							<input type="text" className="form-control roundShape" placeholder="" />
							<input type="text" className="form-control roundShape mt-3" placeholder="" />
							<input type="text" className="form-control roundShape mt-3 inputNumber" placeholder="" />
						</div>
						<div className="col-2 pt-3 fontInput">
							<p className="pl-4">Floor</p>
							<p className="pl-4">P.Code</p>
						</div>
						<div className="col-3">
							<input type="text" className="form-control roundShape mt-3 inputNumber" placeholder="" />
							<input type="text" className="form-control roundShape mt-3 inputNumber" placeholder="" />
						</div>
					</div>
					<div className="row">
						<img className="m-auto mapsPic" src={maps} />
					</div>
				</div>
				<div className="tab-pane fade" id="descriptionTab" role="tabpanel" aria-labelledby="descriptionTab-tab">
					2
				</div>
				<div className="tab-pane fade" id="picsTab" role="tabpanel" aria-labelledby="picsTab-tab">
					3
				</div>
				<div className="tab-pane fade" id="previewTab" role="tabpanel" aria-labelledby="previewTab-tab">
					4
				</div>
			</div>
		</div>
	);
};
