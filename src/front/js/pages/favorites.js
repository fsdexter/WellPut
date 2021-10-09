import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { FavoritesItem } from "../component/favoritesItem";
import { API_BASE_URL } from "../constants";

export const Favorites = () => {
	const { store, actions } = useContext(Context);
	const [favorites, setFavorites] = useState([]);
	// To can update the favorites after to delete one
	const [favoritesRooms, setFavoritesRooms] = useState([]);

	let id_user = JSON.parse(localStorage.getItem("user"))
		? JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id
		: null;

	let roomsFav = store.rooms.filter(room => room.is_favorite === true);

	useEffect(() => {
		getFavorites(id_user);
	}, []);

	// To can update the favorites after to delete one
	useEffect(() => {
		getFavorites(id_user);
	}, [roomsFav.length]);

	// This function is the same that "setFavorites" function, but a "set" inside this file worked bad
	const makeFavorites = async (id_user, id_room) => {
		await fetch(`${API_BASE_URL}/api/change_favorite/${id_user}/${id_room}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => {});
	};

	const getFavorites = async id_user => {
		try {
			const response = await fetch(`${API_BASE_URL}/api/get_favorite/${id_user}`);
			const favList = await response.json();
			setFavorites(favList.msgFavorite);
			// To can update the favorites after to delete one
			setFavoritesRooms(roomsFav);
		} catch (error) {
			return error.message;
		}
	};

	return (
		<div className="container-fluid favoritesBgr ">
			<div className="row myFavorites">
				<h3 id="my_rooms_title" className="ml-4">
					<i className="far rojelio fa-heart fa-1x" /> My Favorites
				</h3>
			</div>
			<div className="mb-5">
				{favorites?.length > 0
					? favorites.map(fav => {
							return (
								<FavoritesItem
									key={fav.id}
									favorites={fav}
									makeFavorites={makeFavorites}
									getFavorites={getFavorites}
								/>
							);
					  })
					: null}
			</div>
		</div>
	);
};
