import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../constants";

import "../../styles/viewprofile.scss";
import avatar from "/workspace/WellPut/src/front/img/avatar.png";

export const UserProfile = () => {
	let { renter_id } = useParams();
	const [renter, setRenter] = useState();

	useEffect(() => {
		getRenter();
	}, []);

	const getRenter = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/api/user-profile/${renter_id}`);
			const renterData = await response.json();
			setRenter(renterData);
			localStorage.setItem("renter", JSON.stringify(renterData));
		} catch (error) {
			return error.message;
		}
	};

	return (
		<div className="picturefond col-12 d-flex justify-content-center text-white">
			<div className="container col-10 detallefondblack">
				{renter ? (
					<>
						<div className="row" key={renter.id}>
							<img
								className="col-4 card-img-top roundShape avatar-profile"
								src={renter.avatar_url ? renter.avatar_url : avatar}
								alt="Card image cap"
							/>

							<div className="col-8 text-white">
								<div className="row ml-4">
									<h1 className="textwhhite ml-5">
										{renter.name} {renter.last_name}
									</h1>
								</div>

								<div className="col-12 detallefondblack " id="presentationUser">
									{renter.city
										? renter.city.map(city => {
												return (
													<div className="d-flex mb-5" key={city.id}>
														<i className="fas fa-map-marker-alt fa-2x mr-4 yellow-icon"></i>
														<h2>{city.name}</h2>
													</div>
												);
										  })
										: "My house"}

									<h4>{renter.description}</h4>
								</div>
							</div>
						</div>
						<div className="row d-flex justify-content-around">
							<div className="col-4 contentfondblack">
								<div className="mb-3">
									<h3>CONTACT</h3>
									<div className="d-flex ml-4 align-items-center">
										<i className="far fa-envelope fa-2x yellow-icon"></i>
										<h5 className="ml-3 align-self-center">{renter.email}</h5>
									</div>
								</div>
								<div className="mt-4">
									<h3>SPOKEN LANGUAGES</h3>
									{renter.language
										? renter.language.map(idiom => {
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
								{renter.characteristic
									? renter.characteristic.map(interest => {
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
			{/* <div className="col-1" id="containerOptionsProfile">
				<div className="col buttonfondblack d-flex justify-content-center">
					<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb" data-target="#addReviewModal">
						<i className="fas fa-user-times fa-2x text-white btn-options-profile"></i>
						<h5 className="textbuttons">Delete Romie</h5>
					</button>
				</div>
				<div className="col buttonfondblack d-flex justify-content-center">
					<button
						type="button"
						className="navbar-brand mb-0 mr-2 btn btn-navb"
						data-toggle="modal"
						data-target="#addReviewModal">
						<i className="far fa-comment-dots fa-2x text-white btn-options-profile"></i>
						<h5 className="textbuttons">Add review</h5>
					</button>
				</div>
				<!-- add ReviewModal Modal -->
				<div id="addReviewModal" className="modal fade" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<AddReview />
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};
