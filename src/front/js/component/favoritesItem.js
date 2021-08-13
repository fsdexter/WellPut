import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/favorites.scss";
import room from "../../img/room.jpg";
import deleteRoom from "../../img/deleteRoom.png";
import { RatingStatic } from "./ratingStatic";
import { RoomiesItem } from "./roomiesItem";

const FavPriceExample = 450;
const FavTitleExample = "Habitación luminosa frente a Sagrada Familia";

export const FavoritesItem = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row mt-2 pb-2 border-bottom border-dark">
			<div className="col-6">
				<div className="row">
					<h4 className="ml-2 mt-2 favTitle pl-3">{FavTitleExample}</h4>
				</div>
				<div className="row pl-4 pt-3">
					<RatingStatic />
				</div>
				<div className="row pt-4 pl-3">
					<RoomiesItem />
				</div>
			</div>
			<div className="col-2">
				<h1 className="favPrice">€{FavPriceExample}</h1>
			</div>
			<div className="col-3">
				<div>
					<img className="favoritesPic" src={room} href="#" />{" "}
				</div>
			</div>
			<div className="col-1">
				<div className="pt-4 pl-3">
					<button type="button" className="btn btn-outline-warning mt-5 roomsButtons favButton">
						<img src={deleteRoom} />
					</button>
				</div>
			</div>
		</div>
	);
};
