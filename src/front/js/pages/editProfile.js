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
								<td className="textoeditusu">Email * :</td>
								<td>
									<input type="email" className="form-inputs" id="email" />
								</td>
							</tr>
							<tr>
								<td className="textoeditusu">Interests * :</td>
								<td>
									<AnimatedMulti />
								</td>
							</tr>
							<tr>
								<td className="textoeditusu">Languages :</td>
								<td>
									<input type="languages" className="form-inputs" id="languages" />
								</td>
							</tr>
							<tr>
								<td className="textoeditusu">Phone :</td>
								<td>
									<input type="phone" className="form-inputs" id="phone" />
								</td>
							</tr>
							<tr>
								<td className="textoeditusu">Nationality :</td>
								<td>
									<input type="nationality" className="form-inputs" id="nationality" />
								</td>
							</tr>
							<tr>
								<td className="textoeditusu">Age :</td>
								<td>
									<input type="age" className="form-inputs" id="age" />
								</td>
							</tr>
							<tr>
								<td className="textoeditusu">Sex :</td>
								<td>
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
								</td>
							</tr>
							<tr>
								<td className="textoeditusu">Occupation :</td>
								<td>
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
								</td>
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
