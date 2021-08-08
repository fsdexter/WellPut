import React, { useContext } from "react";
import { Context } from "../store/appContext";
import cama from "../../img/cama.png";
import hombre from "../../img/iconohombre.png";
import mujer from "../../img/iconomujer.png";
import trabajador from "../../img/ocup1.png";
import estudiante from "../../img/ocup2.png";
import perfil from "../../img/fotodeperfil.png";
import "../../styles/perfiledit.scss";
import { Home } from "./home";
export const EditProfile = () => {
	const { store, actions } = useContext(Context);
	function handleSubmit(e) {
		e.preventDefault();
		alert("Excellent ... Profile Updated!");
	}
	return (
		<div>
			<div className="row pic m-auto justify-content-center d-flex ">
				<div className="detalle" style={{ width: "50rem", height: "110rem" }}>
					<form>
						<div className="form-groupedit d-flex">
							<label className="ml-3" id="texto">
								Name * :
							</label>
							<input type="name" className="form-inputs" id="name" />
						</div>
						<div className="form-groupedit d-flex">
							<label id="texto">City * :</label>
							<input type="city" className="form-inputs" id="city" />
						</div>
						<div className="form-groupedit d-flex">
							<label id="texto">Email * :</label>
							<input type="email" className="form-inputs" id="email" />
						</div>
						<div className="form-groupedit d-flex">
							<label id="texto">Interests * :</label>
							<input type="interests" className="form-inputs" id="interests" />
						</div>
						<div className="form-groupedit d-flex">
							<label id="texto">Languages :</label>
							<input type="languages" className="form-inputs" id="languages" />
						</div>
						<div className="form-groupedit d-flex">
							<label id="texto">Phone :</label>
							<input type="phone" className="form-inputs" id="phone" />
						</div>
						<div className="form-groupedit d-flex">
							<label id="texto">Nationality :</label>
							<input type="nationality" className="form-inputs" id="nationality" />
						</div>
						<div className="form-groupedit d-flex">
							<label id="texto">Age :</label>
							<input type="age" className="form-inputs" id="age" />
						</div>
						<div className="form-groupedit d-flex">
							<label id="texto">Sex :</label>
							<div className="form-check form-check-inline">
								<label className="form-check-label" id="texto">
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
								<label className="form-check-label" id="texto">
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
						<div className="form-groupedit d-flex">
							<label id="texto">Occupation : :</label>
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
					</form>
				</div>
				<div className="detalle justify-content-center" style={{ width: "30rem", height: "40rem" }}>
					<img className="card-img-top roundShape imgperfil " src={perfil} alt="Card image cap" />
					<div className="card-body ">
						<button type="submit" className="btn btn-primary" onClick={handleSubmit}>
							CONTINUE
						</button>
					</div>
				</div>

				<div className=" detalle" style={{ width: "80rem", height: "28rem" }}>
					<label id="texto">Tell us about you :</label>
					<input type="tell" className="imputTell" style={{ width: "60rem", height: "15rem" }} />
				</div>
			</div>
		</div>
	);
};
