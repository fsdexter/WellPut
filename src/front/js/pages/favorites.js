import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { FavoritesItem } from "../component/favoritesItem";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	let id_user = JSON.parse(localStorage.getItem("user"))
		? JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id
		: null;

	useEffect(() => {
		actions.getFavorites(id_user);
	}, []);

	return (
		<div className="container-fluid favoritesBgr ">
			<div className="row myFavorites">
				<h3 id="my_rooms_title" className="ml-4">
					<i className="far rojelio fa-heart fa-1x" /> My Favorites
				</h3>
			</div>
			{store.favorites.length
				? store.favorites.map(fav => {
						return <FavoritesItem key={fav.id} favorites={fav} />;
				  })
				: ""}
		</div>
	);
};
