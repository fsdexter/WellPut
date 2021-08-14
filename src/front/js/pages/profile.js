import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/viewprofile.scss";
import firtsimgprofile from "../../img/photoprofile.png";
export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="picturefond">
			<div className="container col-lg-12 detallefondblack">
				<div className="row">
					<div className="col">
						<img
							className="card-img-top roundShape col-lg-7´´"
							src={firtsimgprofile}
							alt="Card image cap"
						/>
					</div>

					<div className="col">
						<div className="row">1 of 3</div>
						<div className="row">1 of 3</div>
					</div>
				</div>
			</div>
		</div>
	);
};
