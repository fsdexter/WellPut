import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const EditProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Edit Profile page</h1>
		</div>
	);
};
