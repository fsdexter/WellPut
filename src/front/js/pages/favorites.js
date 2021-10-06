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
			{store.favorites.length
				? store.favorites.map(fav => {
						return <FavoritesItem key={fav.id} favorites={fav} />;
				  })
				: ""}
		</div>
	);
};
