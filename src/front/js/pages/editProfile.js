import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import perfil from "../../img/fotodeperfil.png";
import { AnimatedMulti } from "../component/multiSelector";
import { UserProfileForm } from "../component/uploadprofilepicture";
import "../../styles/perfiledit.scss";
import { useParams } from "react-router-dom";
import { interestsOptions, languageOptions } from "../constants";

export const EditProfile = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const { userId } = useParams();
	const userParse = JSON.parse(localStorage.getItem("user")).user;

	const [formValue, setFormValue] = useState({
		name: userParse.name ? userParse.name : "",
		last_name: userParse.last_name ? userParse.last_name : "",
		email: userParse.email ? userParse.email : "",
		interests: userParse.interests ? userParse.interests : "",
		languages: userParse.languages ? userParse.languages : "",
		phone: userParse.phone ? userParse.phone : null,
		birthday: userParse.birthday ? userParse.birthday : "",
		gender: userParse.gender ? userParse.gender : "",
		occupation: userParse.occupation ? userParse.occupation : "",
		description: userParse.description ? userParse.description : ""
	});

	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		await actions.getUser(userId);
	};

	const handleAddrTypeChange = (f, key) => {
		setFormValue({
			...formValue,
			[key]: f.map(item => {
				return item.value;
			})
		});
	};
	//////////////////////////////////////////////
	const inputHandelChange = e => {
		//"[e.target.name]" is the name of form inputs
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
		// userParse = JSON.parse(localStorage.getItem("user")).user;
		// var emailform = document.getElementById("email-form");
		// emailform.value = userParse.email;
		// console.log("formValue ----->>>> ", formValue);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		console.log("formValue --------->>> ", formValue);

		const signUpError = await actions.editProfile(formValue);
		console.log(66, signUpError);
		if (!signUpError) {
			history.push(`/profile/${userId}`);
		}
	};

	return (
		<div className="picturefond col-12 d-flex justify-content-center text-white">
			<form className="container col-11 detallefondblackEditarPerfil" onSubmit={handleSubmit}>
				<div className="row d-flex justify-content-around">
					<div className="col-7 d-flex flex-column" id="myContainerFormInputs">
						<div className="d-flex justify-content-around mt-3">
							<h3 className="col-3">Name * :</h3>
							<input value={formValue.name} name="name" onChange={inputHandelChange} className="col-6" />
						</div>

						<div className="d-flex justify-content-around mt-3">
							<h3 className="col-3">Last Name * :</h3>
							<input
								value={formValue.last_name}
								className="col-6"
								name="last_name"
								onChange={inputHandelChange}
							/>
						</div>

						<div className="d-flex justify-content-around mt-3">
							<h3 className="col-3">Email * :</h3>
							<input
								value={formValue.email}
								type="email"
								className="col-6"
								name="email"
								onChange={inputHandelChange}
							/>
						</div>

						<div className="d-flex justify-content-around mt-3">
							<h3 className="col-3">Phone :</h3>
							<input
								value={formValue.phone}
								type="phone"
								className="col-6"
								name="phone"
								onChange={inputHandelChange}
							/>
						</div>

						<div className="d-flex justify-content-around mt-3">
							<h3 className="col-3">Birthday :</h3>
							<input
								value={formValue.birthday}
								type="date"
								className="col-6"
								name="birthday"
								onChange={inputHandelChange}
							/>
						</div>

						<div className="d-flex justify-content-around mt-3">
							<h3 className="col-3">Interests * :</h3>
							<div className="col-6" name="interests">
								<AnimatedMulti
									options={interestsOptions}
									change={f => handleAddrTypeChange(f, "interests")}
								/>
							</div>
						</div>

						<div className="d-flex justify-content-around mt-3">
							<h3 className="col-3">Language * :</h3>
							<div className="col-6" name="languages">
								<AnimatedMulti
									options={languageOptions}
									change={f => handleAddrTypeChange(f, "languages")}
								/>
							</div>
						</div>

						<div className="row no-gutters d-flex justify-content-between mt-3 mb-4">
							<div className="col-5 d-flex justify-content-around mt-3 ml-4">
								<h3 className="col-4">Gender :</h3>
								<div className="col-4 d-flex justify-content-between">
									<div className="d-flex">
										<i className="fas fa-mars fa-3x" aria-hidden="divue" />
										<input
											className="form-check-input"
											type="checkbox"
											value="man"
											name="gender"
											onChange={inputHandelChange}
										/>
									</div>

									<div className="d-flex">
										<i className="fas fa-venus fa-3x" />
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

							<div className="col-6 d-flex justify-content-around mt-3">
								<h3 className="col-5">Occupation :</h3>
								<div className="col-4 d-flex justify-content-between mr-5">
									<div className="d-flex">
										<i className="fas fa-briefcase fa-3x" />
										<input
											className="form-check-input  "
											type="checkbox"
											value="worker"
											name="occupation"
											onChange={inputHandelChange}
										/>
									</div>

									<div className="d-flex">
										<i className="fas fa-user-graduate fa-3x" />
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
					<div className="col-3  justify-content-center" id="detalleIMG">
						<img className="card-img-top roundShape imgperfil " src={perfil} alt="Card image cap" />
						<div className="d-flex justify-content-around">
							{/* <button className="btn btn-warning">Upload</button> */}
							<input type="submit" className="btn btn-warning"></input>
						</div>
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
