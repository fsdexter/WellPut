import React, { useContext } from "react";
import { Context } from "../store/appContext";
import cama from "../../img/cama.png";
import hombre from "../../img/iconohombre.png";
import mujer from "../../img/iconomujer.png";
import trabajador from "../../img/ocup1.png";
import estudiante from "../../img/ocup2.png";
import "../../styles/perfiledit.scss";

export const EditProfile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="row pic m-auto up d-flex ">
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<div className="detalle" style={{ width: "50rem" }}>
					<form>
						<div className="form-group d-flex">
							<label className="ml-3">Name * :</label>
							<input type="name" className="form-inputs" id="name" />
						</div>
						<div className="form-group d-flex">
							<label>City * :</label>
							<input type="city" className="form-inputs" id="city" />
						</div>
						<div className="form-group d-flex">
							<label>Email * :</label>
							<input type="email" className="form-inputs" id="email" />
						</div>
						<div className="form-group d-flex">
							<label>Interests * :</label>
							<input type="interests" className="form-inputs" id="interests" />
						</div>
						<div className="form-group d-flex">
							<label>Languages :</label>
							<input type="languages" className="form-inputs" id="languages" />
						</div>
						<div className="form-group d-flex">
							<label>Phone :</label>
							<input type="phone" className="form-inputs" id="phone" />
						</div>
						<div className="form-group d-flex">
							<label>Nationality :</label>
							<input type="nationality" className="form-inputs" id="nationality" />
						</div>
						<div className="form-group d-flex">
							<label>Age :</label>
							<input type="age" className="form-inputs" id="age" />
						</div>
						<div className="form-group d-flex">
							<label>Sex :</label>
							<div className="form-check form-check-inline">
								<label className="form-check-label">
									<img className="card-img-top roundShape " src={mujer} alt="Card image cap" />
								</label>
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								/>
							</div>
							<div className="form-check form-check-inline">
								<label className="form-check-label">
									<img className="card-img-top roundShape " src={hombre} alt="Card image cap" />
								</label>
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox3"
									value="option3"
									disabled
								/>
							</div>
						</div>
						<div className="form-group d-flex">
							<label>Occupation : :</label>
							<div className="form-check form-check-inline">
								<label className="form-check-label">
									<img className="card-img-top roundShape " src={trabajador} alt="Card image cap" />
								</label>
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								/>
							</div>
							<div className="form-check form-check-inline">
								<label className="form-check-label">
									<img className="card-img-top roundShape " src={estudiante} alt="Card image cap" />
								</label>
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox3"
									value="option3"
									disabled
								/>
							</div>
						</div>
						<button type="submit" className="btn btn-primary">
							CONTINUAR
						</button>
					</form>
				</div>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
				<br />
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
