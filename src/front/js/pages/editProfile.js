import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import perfil from "../../img/fotodeperfil.png";
import { AnimatedMulti } from "../component/multiSelector";
import "../../styles/perfiledit.scss";
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
			<div className=" pictureediperfile m-auto justify-content-center d-flex flex-column ">
				<div className="detalle row d-flex justify-content-around " style={{ height: "40rem" }}>
					<form className="col-6">
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
								<th scope="col" className="textoeditusu">
									Email * :
								</th>
								<th scope="col">
									<input type="email" className="form-inputs" id="email" />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Interests * :
								</th>
								<th scope="col " className="checklist">
									<AnimatedMulti />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Languages :
								</th>
								<th scope="col" className="checklist">
									<Language />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Phone :
								</th>
								<th scope="col">
									<input type="phone" className="form-inputs" id="phone" />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Birthday :
								</th>
								<th scope="col">
									<input type="age" className="form-inputs" id="age" />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Sex :
								</th>
								<th scope="col">
									<table className="table">
										<tr>
											<th scope="col">
												<i className="fa fa-male fa-4x" aria-hidden="true" />
											</th>
											<th scope="col">
												<input
													className="form-check-input "
													type="checkbox"
													id="inlineCheckbox2"
													value="man"
												/>
											</th>
											<th scope="col">
												<i className="fas fa-female fa-4x " />
											</th>
											<th scope="col">
												<input
													className="form-check-input "
													type="checkbox"
													id="inlineCheckbox3"
													value="woman"
												/>
											</th>
										</tr>
									</table>
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Occupation :
								</th>
								<th scope="col">
									<table className="table">
										<tr>
											<th scope="col">
												<i className="fas fa-briefcase fa-2x" />
											</th>
											<th scope="col">
												<input
													className="form-check-input "
													type="checkbox"
													id="inlineCheckbox2"
													value="man"
												/>
											</th>
											<th scope="col">
												<i className="fas fa-user-graduate fa-2x" />
											</th>
											<th scope="col">
												<input
													className="form-check-input "
													type="checkbox"
													id="inlineCheckbox3"
													value="woman"
												/>
											</th>
										</tr>
									</table>
								</th>
							</tr>
						</table>
					</form>
					<div className=" col-3  detalle justify-content-center" style={{ width: "10rem", height: "29rem" }}>
						<img className="card-img-top roundShape imgperfil " src={perfil} alt="Card image cap" />
						<form>
							{/*<input type="file" />*/}

							<button type="submit" className="btn btn-warning">
								Upload
							</button>
						</form>
						<br />
						{/* HACER  BOTON DE GUARDAR LA IMAGEN Y OTRO GUARDAR LOS DATOS DEL PERFIL , ESTE VA A LLAMAR FUNCION Y REDIRECCIONAR AL PROFILE*/}
						<button type="submit" className="btn btn-warning" onClick={handleSubmit}>
							SAVE
						</button>
					</div>
				</div>

				<br />
				<div className=" detalletell  align-items-center" style={{ height: "16rem" }}>
					<label className="textoeditusu  align-items-center ">Tell us about you :</label>
					<br />
					<input
						type="tell"
						className="imputTell  align-items-center"
						style={{ width: "50rem", height: "8rem" }}
					/>
				</div>
			</div>
		</div>
	);
};
