import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import cama from "../../img/cama.png";
import hombre from "../../img/iconohombre.png";
import mujer from "../../img/iconomujer.png";
import trabajador from "../../img/ocup1.png";
import estudiante from "../../img/ocup2.png";
import perfil from "../../img/fotodeperfil.png";
import { AnimatedMulti } from "../component/multiSelector";
import "../../styles/perfiledit.scss";
import { Home } from "./home";
import { Language } from "../component/language";
export const EditProfile = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	function handleSubmit(e) {
		e.preventDefault();
		alert("Excellent ... Profile Updated!");
		history.push("/profile");
	}
	return (
		<div>
			<div className="row pictureediperfile m-auto justify-content-center d-flex ">
				<div className="detalle" style={{ width: "50rem", height: "45rem" }}>
					<form>
						<table className="tableeditusu">
							<tr>
								<th scope="col" className="textoeditusu">
									Name * :
								</th>
								<th scope="col">
									<input type="name" className="form-inputs" id="name" />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">Email * :</th>
								<th scope="col">
									<input type="email" className="form-inputs" id="email" />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">Interests * :</th>
								<th scope="col" className="checklist  pull-right">
									<AnimatedMulti />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">Languages :</th>
								<th scope="col" className="checklist">
									<Language />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">Phone :</th>
								<th scope="col">
									<input type="phone" className="form-inputs" id="phone" />
								</th>
							</tr>

							<tr>
								<th scope="col" className="textoeditusu">Birthday :</th>
								<th scope="col">
									<input type="age" className="form-inputs" id="age" />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">Sex :</th>
								<th scope="col">
									<div className="form-check form-check-inline">
										<label className="form-check-label" id="texto">
											<img
												className="card-img-top roundShape "
												src={mujer}
												alt="Card image cap"
											/>
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
											<img
												className="card-img-top roundShape "
												src={hombre}
												alt="Card image cap"
											/>
										</label>
										<input
											className="form-check-input"
											type="checkbox"
											id="inlineCheckbox3"
											value="option3"
											disabled
										/>
									</div>
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">Occupation :</th>
								<th scope="col">
									<div className="form-check form-check-inline">
										<label className="form-check-label">
											<img
												className="card-img-top roundShape "
												src={trabajador}
												alt="Card image cap"
											/>
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
											<img
												className="card-img-top roundShape "
												src={estudiante}
												alt="Card image cap"
											/>
										</label>
										<input
											className="form-check-input"
											type="checkbox"
											id="inlineCheckbox3"
											value="option3"
											disabled
										/>
									</div>
								</th>
							</tr>
						</table>
						¨
						{/* 						<div className="form-groupedit d-flex">
							<label className="ml-3" id="texto">
								
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
						</div>*/}
					</form>
				</div>
				<div className="detalle justify-content-center" style={{ width: "25rem", height: "45rem" }}>
					<img className="card-img-top roundShape imgperfil " src={perfil} alt="Card image cap" />
					<div className="card-body ">
						{/* HACER  BOTON DE GUARDAR LA IMAGEN Y OTRO GUARDAR LOS DATOS DEL PERFIL , ESTE VA A LLAMAR FUNCION Y REDIRECCIONAR AL PROFILE*/}
						<button type="submit" className="btn btn-primary" onClick={handleSubmit}>
							GUARDAR
						</button>
					</div>
				</div>

				<div className=" detalle" style={{ width: "80rem", height: "28rem" }}>
					<label className="textoeditusu">Tell us about you :</label>
					<input type="tell" className="imputTell" style={{ width: "60rem", height: "15rem" }} />
				</div>
			</div>
		</div>
	);
};
