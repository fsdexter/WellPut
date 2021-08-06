import React, { useContext } from "react";
import { Context } from "../store/appContext";
import cama from "../../img/cama.png";

import "../../styles/perfiledit.scss";

export const EditProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="up d-flex ">
				<div className="detalle" style={{ width: "50rem" }}>
					<form>
						<div className="form-group d-flex">
							<label>Name * :</label>
							<input type="name" className="form-control" id="name" />
						</div>
						<div className="form-group d-flex">
							<label>City * :</label>
							<input type="city" className="form-control" id="city" />
						</div>
						<button type="submit" className="btn btn-primary">
							CONTINUAR
						</button>
					</form>
				</div>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<div className="detalle" style={{ width: "20rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
					</div>
				</div>
			</div>
			<div className="down">
				<br /> <br />
				<br />
				<br />
				<br />{" "}
				<div className=" detalle" style={{ width: "100rem" }}>
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
