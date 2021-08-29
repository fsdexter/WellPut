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
		//actions.getReviews(room_id);
		actions.getReviews(1);
		//actions.getDetailsRoom(room_id);
		//actions.getDetailsRoom(1);
	}, []);

	return (
		<>
			{store.room.room_archives || JSON.parse(localStorage.getItem("room")).room_archives ? (
				<div
					key={JSON.parse(localStorage.getItem("room")).room_archives[0].id}
					style={{
						backgroundImage: "url(" + JSON.parse(localStorage.getItem("room")).room_archives[0].url + ")",
						//backgroundSize: "cover",
						width: "100%",
						height: "100%"
					}}>
					{store.room.reviewsRoom || JSON.parse(localStorage.getItem("reviewsRoom")) ? (
						<div>cdvfvbfgbfgbbgf</div>
					) : null}
				</div>
			) : (
				"NOT FOUND THE ROOM SELECTED"
			)}
		</>
	);
};
