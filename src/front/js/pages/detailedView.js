import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { OwnerResume } from "../component/ownerResume";
import { ReviewsResume } from "../component/reviewsResumen";
import { CarouselRoomImg } from "../component/carouselRoomImg";

import roomDetails1 from "../../img/roomDetails.png";

import "../../styles/detailedView.scss";

export const DetailedView = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row d-flex justify-content-around">
			<div className="col-2 align-self-end mb-3">
				<OwnerResume />
			</div>
			<div className="col-9 mr-2 mb-3">
				<div className="row d-flex justify-content-center mb-2">
					<img src={roomDetails1} className="col-12" />
				</div>
				<di className="row d-flex justify-content-center mb-3 mt-3">
					<div className="col-12 d-flex flex-column">
						<h5 className="font-weight-bolder"> Description</h5>
						<p>
							Exterior room with double bed and private bathroom in the Salamanca district, very bright,
							fully equipped and with all the comforts. Young and calm environment, NO SMOKING, NO
							COUPLES. Unbeatable location near the metro, bus and other local shops.
						</p>
					</div>
				</di>
				<div className="row d-flex justify-content-around">
					<div className="col-2 d-flex flex-column">
						<div className="d-flex flex-column mb-2">
							<h5 className="font-weight-bolder"> Expenses included</h5>
							<div className="d-flex justify-content-around">
								<i className="fas fa-wifi fa-2x" />
								<i className="fas fa-shower fa-2x" />
								<i className="fas fa-burn fa-2x  " />
								<i className="far fa-lightbulb fa-2x " />
							</div>
						</div>
						<div className="d-flex flex-column mt-1">
							<h5 className="font-weight-bolder">Features</h5>
							<div className="d-flex justify-content-around">
								<i className="fas fa-building fa-2x" />
								<i className="fas fa-couch fa-2x" />
								<i className="fas fa-bath fa-2x" />
							</div>
						</div>
					</div>
					<div className="col-2 bg-warning">ENLACE PERFIL DE INQUILINOS</div>
					<div className="col-5 bg-info">
						<ReviewsResume />
					</div>
				</div>
			</div>
		</div>
	);
};
