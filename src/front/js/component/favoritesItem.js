import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/favorites.scss";
import room from "../../img/room.jpg";
import deleteRoom from "../../img/deleteRoom.png";
import { RatingStatic } from "./ratingStatic";
import { RoomiesItem } from "./roomiesItem";
import PropTypes from "prop-types";

const FavPriceExample = 450;
const FavTitleExample = "Habitación luminosa frente a Sagrada Familia";

export const FavoritesItem = ({ favorites }) => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row favoritesBg my-1">
			<div className="col-7 fvSecondBg">
				<div className="row">
					<h4 className="ml-2 mt-2 favTitle pl-3">{favorites.title}</h4>
				</div>
				<div className="row">
					<h4 className="pl-3 ml-2 favPrice">Price: €{favorites.price}</h4>
				</div>
				<div className="row">
					<h4 className="pl-3 ml-2 favPrice">Deposit: €{favorites.deposit}</h4>
				</div>
				<div className="row">
					<h4 className="pl-3 ml-2 favPrice">Address: {favorites.address}</h4>
				</div>
			</div>
			<div className="col-3 picBar">
				<img className="favoritesPic" src={favorites.room_url} href="#" />{" "}
			</div>
			<div className="col-1">
				<button type="button" className="btn btn-outline-warning favButton">
					<img src={deleteRoom} />
				</button>
			</div>
		</div>
	);
};
FavoritesItem.propTypes = {
	favorites: PropTypes.object
};
