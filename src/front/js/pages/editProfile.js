import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import perfil from "../../img/fotodeperfil.png";
import { AnimatedMulti } from "../component/multiSelector";
import { UserProfileForm } from "../component/uploadprofilepicture";
import "../../styles/perfiledit.scss";
import { interestsOptions, languageOptions } from "../constants";

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
	const handleAddrTypeChange = (f, key) => {
		console.log(f, key, "<-----");
		setFormValue({
			...formValue,
			[key]: f.map(item => {
				return item.value;
			})
		});
		console.log("addrtype ----->>>> ", formValue);
	};
	//////////////////////////////////////////////
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
						<div className="">
							<div className=" d-flex">
								<div scope="col" className="textoeditusu ">
									Full Name * :
								</div>

								<div scope="col">
									<input
										type="name"
										className="inputeditusu"
										name="fullName"
										onChange={inputHandelChange}
									/>
								</div>
							</div>
							<div className="row  d-flex">
								<div scope="col-" className="textoeditusu">
									Email * :
								</div>
								<div scope="col-10">
									<input
										type="email"
										className="inputeditusu"
										name="email"
										onChange={inputHandelChange}
									/>
								</div>
							</div>
							<div className=" d-flex">
								<div scope="col" className="textoeditusu">
									Interests * :
								</div>
								{/*NO ESTOY SEGURA DE QUE SE HAGA ASI*/}
								<div scope="col " className="inputeditusu" name="interests">
									<AnimatedMulti
										options={interestsOptions}
										change={f => handleAddrTypeChange(f, "interests")}
									/>
								</div>
							</div>
							<div className=" d-flex">
								<div scope="col" className="textoeditusu">
									Language * :
								</div>
								{/*NO ESTOY SEGURA DE QUE SE HAGA ASI*/}
								<div scope="col" className="inputeditusu" name="languages">
									<AnimatedMulti
										options={languageOptions}
										change={f => handleAddrTypeChange(f, "languages")}
									/>
								</div>
							</div>
							<div className=" d-flex">
								<div scope="col" className="textoeditusu">
									Phone :
								</div>
								<div scope="col">
									<input
										type="phone"
										className="inputeditusu"
										name="phone"
										onChange={inputHandelChange}
									/>
								</div>
							</div>
							<div className=" d-flex">
								<div scope="col" className="textoeditusu">
									Birthday :
								</div>
								<div scope="col">
									<input
										type="date"
										className="inputeditusu"
										name="birthday"
										onChange={inputHandelChange}
									/>
								</div>
							</div>
							<div className=" d-flex">
								<div scope="col" className="textoeditusu">
									Sex :
								</div>
								<div scope="col">
									<div className="div">
										<div className=" d-flex ">
											<div scope="col">
												<i className="fa fa-male fa-4x" aria-hidden="divue" />
											</div>
											<div scope="col">
												<input
													className="form-check-input  "
													type="checkbox"
													value="man"
													name="sex"
													onChange={inputHandelChange}
												/>
											</div>
											<div scope="col">
												<i className="fas fa-female fa-4x " />
											</div>
											<div scope="col">
												<input
													className="form-check-input"
													type="checkbox"
													value="woman"
													name="sex"
													onChange={inputHandelChange}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className=" d-flex">
								<div scope="col" className="textoeditusu">
									Occupation :
								</div>
								<div scope="col">
									<div className="div">
										<div className=" d-flex">
											<div scope="col">
												<i className="fas fa-briefcase fa-2x" />
											</div>
											<div scope="col">
												<input
													className="form-check-input  "
													type="checkbox"
													value="worker"
													name="occupation"
													onChange={inputHandelChange}
												/>
											</div>
											<div scope="col">
												<i className="fas fa-user-graduate fa-2x" />
											</div>
											<div scope="col">
												<input
													className="form-check-input"
													type="checkbox"
													value="student"
													name="occupation"
													onChange={inputHandelChange}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className=" col  detalle justify-content-center" style={{ width: "10rem", height: "29rem" }}>
						<img className="card-img-top roundShape imgperfil " src={perfil} alt="Card image cap" />
						<UserProfileForm />
						<br />
						{/* HACER  BOTON DE GUARDAR LA IMAGEN Y OTRO GUARDAR LOS DATOS DEL PERFIL , ESTE VA A LLAMAR FUNCION Y REDIRECCIONAR AL PROFILE*/}
						<button className="btn btn-warning" onClick={inputHandelChange}>
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
