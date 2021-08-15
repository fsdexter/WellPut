import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/viewprofile.scss";
import firtsimgprofile from "../../img/photoprofile.png";
import argentina from "../../img/argentina.png";
export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="picturefond col-lg-12">
			<div className="container col-lg-9 detallefondblack">
				<div className="row">
					<img className="card-img-top roundShape col-lg-4" src={firtsimgprofile} alt="Card image cap" />
					<div className="block">
						<div className="col-12">
							<div className="row-9">
								<img
									className="card-img-top roundShape"
									src={argentina}
									alt="Card image cap"
									style={{ width: "2px", height: "78px" }}
								/>
							</div>
							<div className="row-2">
								<h1>Jason Becker-29</h1>
							</div>
							<div className="row-3">
								<i className="fa fa-star start" aria-hidden="true" />
								&nbsp;&nbsp;
								<i className="fa fa-star start" aria-hidden="true" />
								&nbsp;&nbsp;
								<i className="fa fa-star start" aria-hidden="true" />
								&nbsp;&nbsp;
								<i className="fa fa-star start" aria-hidden="true" />
								&nbsp;&nbsp;
								<i className="fa fa-star start" aria-hidden="true" />
							</div>
						</div>
						<div className="row">
							<div className="col-12">aqui va la descripcop</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
