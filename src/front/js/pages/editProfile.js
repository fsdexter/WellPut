import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import perfil from "../../img/fotodeperfil.png";
import { AnimatedMulti } from "../component/multiSelector";
import "../../styles/perfiledit.scss";
import { Language } from "../component/language";
export const EditProfile = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [formValue, setFormValue] = useState({
		fullName: "",
		email: "",
		interests: "",
		languages: "",
		phone: null,
		birthday: "",
		sex: "",
		occupation: "",
		personalDescription: ""
	});

	const inputHandelChange = e => {
		//"[e.target.name]" is the name of form inputs
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
		console.log("formValue ----->>>> ", formValue);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		alert("Excellent ... Profile Updated!");

		const signUpError = await actions.editProfile(formValue);

		if (!signUpError) {
			history.push("/profile");
		}
	};

	return (
		<div>
			<form
				className=" pictureediperfile m-auto justify-content-center d-flex flex-column"
				onSubmit={handleSubmit}>
				<div className="detalle row d-flex justify-content-around " style={{ height: "40rem" }}>
					<div className="col-6">
						<table className="tableeditusu">
							<tr>
								<th scope="col" className="textoeditusu">
									Full Name * :
								</th>
								<th scope="col">
									<input
										type="name"
										className="form-inputs"
										name="fullName"
										onChange={inputHandelChange}
									/>
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Email * :
								</th>
								<th scope="col">
									<input
										type="email"
										className="form-inputs"
										name="email"
										onChange={inputHandelChange}
									/>
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Interests * :
								</th>
								{/*NO ESTOY SEGURA DE QUE SE HAGA ASI*/}
								<th scope="col " className="checklist" name="interests" onChange={inputHandelChange}>
									<AnimatedMulti />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Languages :
								</th>
								{/*NO ESTOY SEGURA DE QUE SE HAGA ASI*/}
								<th scope="col" className="checklist" name="languages" onChange={inputHandelChange}>
									<Language />
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Phone :
								</th>
								<th scope="col">
									<input
										type="phone"
										className="form-inputs"
										name="phone"
										onChange={inputHandelChange}
									/>
								</th>
							</tr>
							<tr>
								<th scope="col" className="textoeditusu">
									Birthday :
								</th>
								<th scope="col">
									<input
										type="date"
										className="form-inputs"
										name="birthday"
										onChange={inputHandelChange}
									/>
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
													value="man"
													name="sex"
													onChange={inputHandelChange}
												/>
											</th>
											<th scope="col">
												<i className="fas fa-female fa-4x " />
											</th>
											<th scope="col">
												<input
													className="form-check-input "
													type="checkbox"
													value="woman"
													name="sex"
													onChange={inputHandelChange}
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
													value="worker"
													name="occupation"
													onChange={inputHandelChange}
												/>
											</th>
											<th scope="col">
												<i className="fas fa-user-graduate fa-2x" />
											</th>
											<th scope="col">
												<input
													className="form-check-input "
													type="checkbox"
													value="student"
													name="occupation"
													onChange={inputHandelChange}
												/>
											</th>
										</tr>
									</table>
								</th>
							</tr>
						</table>
					</div>
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
						<button type="submit" className="btn btn-warning">
							SAVE
						</button>
					</div>
				</div>

				<br />
				<div className=" detalle" style={{ height: "16rem" }}>
					<label className="textoeditusu">Tell us about you :</label>
					<br />
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						name="personalDescription"
						onChange={inputHandelChange}
					/>
				</div>
			</form>
		</div>
	);
};
