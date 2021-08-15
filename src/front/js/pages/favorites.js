import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { FavoritesItem } from "../component/favoritesItem";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid favoritesBg">
			<FavoritesItem />
			<FavoritesItem />
			<FavoritesItem />
		</div>
	);
};
