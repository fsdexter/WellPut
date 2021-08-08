import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/newAnnouncement.scss";

export const NewAnnouncement = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<a
						className="nav-link active"
						id="locationTab-tab"
						data-toggle="tab"
						href="#locationTab"
						role="tab"
						aria-controls="locationTab"
						aria-selected="true">
						locationTab
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="descriptionTab-tab"
						data-toggle="tab"
						href="#descriptionTab"
						role="tab"
						aria-controls="descriptionTab"
						aria-selected="false">
						descriptionTab
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="picsTab-tab"
						data-toggle="tab"
						href="#picsTab"
						role="tab"
						aria-controls="picsTab"
						aria-selected="false">
						picsTab
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="previewTab-tab"
						data-toggle="tab"
						href="#previewTab"
						role="tab"
						aria-controls="previewTab"
						aria-selected="false">
						previewTab
					</a>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div
					className="tab-pane fade show active"
					id="locationTab"
					role="tabpanel"
					aria-labelledby="locationTab-tab">
					1
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
