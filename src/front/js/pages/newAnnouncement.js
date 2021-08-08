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
						<h5>Description</h5>
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
						<h5>Pictures</h5>
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
						<h5>Preview</h5>
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
					<div className="row">
						<div className="col-9" />
						<div className="col-2">
							<button type="button" className="btn btn-warning mb-5 ml-5">
								Continue
							</button>
						</div>
					</div>
				</div>
				<div className="tab-pane fade" id="descriptionTab" role="tabpanel" aria-labelledby="descriptionTab-tab">
					<div className="row pt-4">
						<div className="col-2">
							<p className="fontInput pl-5">Title </p>{" "}
						</div>
						<div className="col ">
							<input type="text" className="form-control roundShape" placeholder="" />
						</div>
						<div className="col-2" />
					</div>
					<div className="row mt-1">
						<div className="col-2 mt-4">
							<p className="fontInputSm pl-2">Description </p>{" "}
						</div>
						<div className="col-8 ">
							<textarea
								className="form-control descriptionBack roundShape"
								id="exampleFormControlTextarea1 "
								rows="3"
							/>
						</div>
						<div className="col-1" />
					</div>
					<div className="row  mt-2 ">
						<div className="col-6">
							<div className="row ">
								<div className="col-4">
									<p className="fontInput pl-2">Price</p>{" "}
								</div>
								<div className="col-3">
									<input type="text" className="form-control" placeholder="Min." />
								</div>
								<div className="col-3 mb-2">
									<input type="text" className="form-control" placeholder="Max." />
								</div>
							</div>
							<div className="row ">
								<div className="col-4">
									<p className="fontInput pl-2">Deposit </p>{" "}
								</div>
								<div className="col-3">
									<input type="text" className="form-control" placeholder="Min." />
								</div>
								<div className="col-3 mb-2">
									<input type="text" className="form-control" placeholder="Max." />
								</div>
							</div>
						</div>
						<div className="col-6" />
					</div>
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
