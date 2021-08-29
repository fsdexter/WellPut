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
		//actions.getTenancies(room_id);
		actions.getTenancies(1);
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
					{store.room.tenanciesRoom || JSON.parse(localStorage.getItem("tenanciesRoom"))
						? JSON.parse(localStorage.getItem("tenanciesRoom")).map(tenancy => {
								console.log(tenancy);
								return (
									<div key={tenancy.id} className="container col-10 text-white pt-4" id="bxReviews">
										<div
											className="col-10 d-flex justify-content-around mt-3"
											id="commentsContainer">
											{tenancy.user.map(user => {
												return <img key={user.id} src={user.avatar_url} className="col-2" />;
											})}

											{tenancy.reviews.map(review => {
												return (
													<div key={review.id} className="col-9 d-flex flex-column">
														<p>{review.date}</p>
														<h3>{review.comment}</h3>
													</div>
												);
											})}
										</div>
									</div>
								);
						  })
						: null}
				</div>
			) : (
				"NOT FOUND THE ROOM SELECTED"
			)}
		</>
	);
};
