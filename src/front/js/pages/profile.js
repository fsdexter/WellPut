import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/viewprofile.scss";
import firtsimgprofile from "../../img/photoprofile.png";
export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 picturefond">
			<div className="text-center mt-5 pictureprofile1">
				<img className="card-img-top roundShape " src={firtsimgprofile} alt="Card image cap" />
			</div>
		</div>
	);
};
