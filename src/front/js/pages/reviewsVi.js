import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import review1 from "../../img/review1.png";
import review2 from "../../img/review2.png";
import "../../styles/reviewsVi.scss";

export const Reviews = () => {
	const { store, actions } = useContext(Context);
	let { room_id } = useParams();
	console.log("room_id en comentarios : ", room_id);

	useEffect(() => {
		actions.getTenancies(room_id);
		//actions.getTenancies(1);
	}, []);

	return (
		<>
			{store.room.room_archives || JSON.parse(localStorage.getItem("room")).room_archives ? (
				<div
					key={JSON.parse(localStorage.getItem("room")).room_archives[0].id}
					className="row"
					style={{
						backgroundImage: "url(" + JSON.parse(localStorage.getItem("room")).room_archives[0].url + ")",
						backgroundSize: "cover",
						backgroundPosition: "center center",
						width: "100%",
						height: "100%"
					}}>
					<div className="container col-10 text-white pt-4 mb-3 mt-3" id="bxReviews">
						{store.room.tenanciesRoom || JSON.parse(localStorage.getItem("tenanciesRoom"))
							? JSON.parse(localStorage.getItem("tenanciesRoom")).map(tenancy => {
									return (
										<div key={tenancy.id}>
											<div
												className="col-10 d-flex justify-content-around my-3"
												id="commentsContainer">
												<img
													key={tenancy.user.id}
													src={tenancy.user.avatar_url}
													className="col-2 imgAvatarUserRev"
												/>

												{tenancy.reviews.map(review => {
													return (
														<div key={review.id} className="col-9 d-flex flex-column">
															<h5 className="mb-3 userNameReviws">{tenancy.user.name}</h5>
															<h3>{review.comment}</h3>
															<p className="mt-2">{review.date}</p>
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
				"NOT FOUND THE ROOM SELECTED"
			)}
		</>
	);
};
