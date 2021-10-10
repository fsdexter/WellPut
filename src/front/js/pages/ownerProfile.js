import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../constants";

import { AddReview } from "../component/addReview";
import { Notifications } from "../component/notifications";
import "../../styles/viewprofile.scss";
import avatar from "/workspace/WellPut/src/front/img/avatar.png";

export const OwnerProfile = () => {
	let { owner_id } = useParams();
	const [owner, setOwner] = useState();
	useEffect(() => {
		getOwner();
	}, []);

	const getOwner = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/api/owner-profile/${owner_id}`);
			const ownerData = await response.json();
			setOwner(ownerData);
			localStorage.setItem("owner", JSON.stringify(ownerData));
		} catch (error) {
			return error.message;
		}
	};

	const deleteRoomie = () => {
		console.log("SE ELIMINÓ EL USUARIO SELECCIONADA COMO INQUILINO DE LA HABITACIÓN XXX ");
	};

	return (
		<div className="picturefond col-12 d-flex justify-content-center text-white">
			<div className="container col-10 detallefondblack">
				{owner ? (
					<>
						<div className="row" key={owner.id}>
							<img
								className="col-4 card-img-top roundShape avatar-profile"
								src={owner.avatar_url ? owner.avatar_url : avatar}
								alt="Card image cap"
							/>

							<div className="col-8 text-white">
								<div className="row ml-4">
									<h1 className="textwhhite ml-5">
										{owner.name} {owner.last_name}
									</h1>
								</div>

								<div className="col-11 detallefondblack  " id="presentationUser">
									{owner.city
										? owner.city.map(city => {
												return (
													<div className="d-flex mb-5" key={city.id}>
														<i className="fas fa-map-marker-alt fa-2x mr-4 yellow-icon"></i>
														<h2>{city.name}</h2>
													</div>
												);
										  })
										: "My house"}

									<h4>{owner.description}</h4>
								</div>
							</div>
						</div>
						<div className="row d-flex justify-content-around">
							<div className="col-4 contentfondblack">
								<div className="mb-3">
									<h3>CONTACT</h3>
									<div className="d-flex ml-4 align-items-center">
										<i className="far fa-envelope fa-2x yellow-icon"></i>
										<h5 className="ml-3 align-self-center">{owner.email}</h5>
									</div>
								</div>
								<div className="mt-4">
									<h3>SPOKEN LANGUAGES</h3>
									{owner.language
										? owner.language.map(idiom => {
												return (
													<div key={idiom.id} className="d-flex ml-4 mt-2 align-items-center">
														<i className="far fa-grin-tongue-wink fa-lg yellow-icon"></i>
														<h5 className="ml-3">{idiom.name}</h5>
													</div>
												);
										  })
										: "I can speak... a lot of languages!! "}
								</div>
							</div>
							<div className="col-4 contentfondblack">
								<h3 className="mb-3">INTEREST</h3>
								{owner.characteristic
									? owner.characteristic.map(interest => {
											return (
												<div key={interest.id} className="d-flex ml-4 mt-2 align-items-center">
													<i className="far fa-check-circle fa-lg yellow-icon"></i>
													<h5 className="ml-3 text-capitalize">{interest.name}</h5>
												</div>
											);
									  })
									: "I love do... mmmm I need to think "}
							</div>
						</div>
					</>
				) : (
					<div className="text-center text-warning spiner-loading-data">
						<i className="fas fa-spinner fa-pulse fa-6x" />
					</div>
				)}
			</div>
			{/* <div className="col-1" id="containerOptionsProfile"> */}
			{/* <div className="col buttonfondblack d-flex justify-content-center">
					<button
						type="button"
						className="navbar-brand mb-0 mr-2 btn btn-navb"
						data-toggle="modal"
						data-target="#addReviewModal">
						<i className="far fa-comment-dots fa-2x text-white btn-options-profile"></i>
						<h5 className="textbuttons">Add review</h5>
					</button>
				</div> */}
			{/*<!-- add ReviewModal Modal -->*/}
			{/* <div id="addReviewModal" className="modal fade" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<AddReview />
						</div>
					</div>
				</div>
				</div> */}

			{/*<!-- notification Modal -->*/}
			{/* <div id="notificationModal" className="modal fade" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<Notifications />
						</div>
					</div>
				</div> */}
			{/* </div> */}
		</div>
	);
};
