import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../constants";

import "../../styles/reviewsVi.scss";

export const Reviews = () => {
	let { room_id } = useParams();
	const [room, setRoom] = useState({});

	useEffect(() => {
		getDetailsRoom();
	}, []);

	const getDetailsRoom = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/api/detailed_room/${room_id}`);
			const roomData = await response.json();
			setRoom(roomData);
		} catch (error) {
			setRoom({});
			return error.message;
		}
	};

	return (
		<>
			{room ? (
				<div
					className="row"
					style={{
						backgroundImage: "url(" + room.room_url + ")",
						backgroundSize: "cover",
						backgroundPosition: "center center",
						width: "100%",
						height: "100%"
					}}>
					<div className="container col-10 text-white pt-4 mb-3 mt-3" id="bxReviews">
						{room.tenancies?.length > 0
							? room.tenancies?.map(tenancy => {
									return (
										<div key={tenancy.id}>
											<div
												className="col-10 mt-5 d-flex justify-content-around my-3"
												id="commentsContainer">
												{tenancy.renter.map(renter => {
													return (
														<img
															key={renter.id}
															src={
																renter.avatar_url
																	? renter.avatar_url
																	: "https://st4.depositphotos.com/27867620/30472/v/600/depositphotos_304728180-stock-illustration-male-avatar-web-icon.jpg"
															}
															className="col-2 imgAvatarUserRev"
														/>
													);
												})}

												{tenancy.reviews.map(review => {
													return (
														<div key={review.id} className="col-9 d-flex flex-column">
															{tenancy.renter.map(renter => {
																return (
																	<h5 key={renter.id} className="mb-3 userNameReviws">
																		{renter.name}
																	</h5>
																);
															})}

															<h3>{review.comment}</h3>
															<p className="mt-2">{review.date.substring(0, 16)}</p>
														</div>
													);
												})}
											</div>
										</div>
									);
							  })
							: null}
					</div>
				</div>
			) : (
				<div className="text-center text-warning spiner-loading-data">
					<i className="fas fa-spinner fa-pulse fa-6x" />
				</div>
			)}
		</>
	);
};
