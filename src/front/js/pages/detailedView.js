import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import { OwnerResume } from "../component/ownerResume";
import { ReviewsResume } from "../component/reviewsResumen";
import { CarouselRoomImg } from "../component/carouselRoomImg";

import roomDetails1 from "../../img/roomDetails.png";
import rommie1 from "../../img/Becker.jpg";
import rommie2 from "../../img/adriana.jpg";

import "../../styles/detailedView.scss";

export const DetailedView = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row d-flex justify-content-around">
			<div className="col-10 mb-3">
				<div className="row d-flex justify-content-center mb-2">
					<CarouselRoomImg />
				</div>
				<di className="row d-flex justify-content-center mb-3 mt-3">
					<div className="col-9 d-flex flex-column">
						<h5 className="font-weight-bolder"> Description</h5>
						<p>
							Exterior room with double bed and private bathroom in the Salamanca district, very bright,
							fully equipped and with all the comforts. Young and calm environment, NO SMOKING, NO
							COUPLES. Unbeatable location near the metro, bus and other local shops.
						</p>
					</div>
				</di>
			</div>

			<div className="row">
				<div className="col-2 mb-3" id="oRBox">
					<OwnerResume />
				</div>

				<div className="col-9 d-flex justify-content-around" id="detailsDetails">
					<div className="col-2 ">
						<div className="d-flex flex-column">
							<h5 className="font-weight-bolder"> Expenses included</h5>
							<div className="d-flex justify-content-around">
								<i className="fas fa-wifi fa-2x" />
								<i className="fas fa-shower fa-2x" />
								<i className="fas fa-burn fa-2x  " />
								<i className="far fa-lightbulb fa-2x " />
							</div>
						</div>
						<div className="d-flex flex-column">
							<h5 className="font-weight-bolder mt-3">Features</h5>
							<div className="d-flex justify-content-around">
								<i className="fas fa-building fa-2x" />
								<i className="fas fa-couch fa-2x" />
								<i className="fas fa-bath fa-2x" />
							</div>
						</div>
					</div>
					<div className="col-2">
						<div className="roomiesLink d-flex align-items-center justify-content-around">
							<Link to="/profile">
								<img src={rommie1} className="imgCorrentRom" />
							</Link>
							<Link to="/profile">
								<img src={rommie2} className="imgCorrentRom" />
							</Link>
						</div>
					</div>
					<div className="col-5 ownRes mb-3">
						<ReviewsResume />
					</div>
				</div>
			</div>
		</div>
	);
};
