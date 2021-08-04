import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
// Bakend URL
//import { API_BASE_URL } from "../constants";

export const SignUp = () => {
	const { actions } = useContext(Context);
	// to go "Edit Profile" after the sign up
	let history = useHistory();
	const [formValue, setFormValue] = useState({
		fullName: "",
		email: "",
		password: "",
		repearPassword: ""
	});

	// To get inputs values
	const inputHandelChange = e => {
		//"[e.target.name]" is the name of form inputs
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const handlerSubmit = e => {
		e.preventDefault();
		actions.signUp(formValue);
		// to go "Edit Profile" after the sign up
		history.push("/edit_profile");
	};

	return (
		<div className="container row text-center mt-5  d-flex justify-content-center">
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<form onSubmit={handlerSubmit} className="col-6 p-5 mt-3 myBox text-white">
				<div className="form-grup row mt-2">
					<input
						className="col-6"
						type="email"
						name="email"
						id="email"
						placeholder="Email"
						onChange={inputHandelChange}
						required
					/>
				</div>
				<div className="form-grup row mt-2">
					<input
						className="col-6"
						type="text"
						name="fullName"
						id="fullName"
						placeholder="Full Name"
						onChange={inputHandelChange}
						required
					/>
				</div>
				<div className="form-grup row mt-2">
					<input
						className="col-6"
						type="password"
						name="password"
						placeholder="Password"
						onChange={inputHandelChange}
						required
					/>
				</div>
				<div className="form-grup row mt-2">
					<input
						className="col-6"
						type="password"
						name="repeatPassword"
						placeholder="Repeat Password"
						onChange={inputHandelChange}
						required
					/>
				</div>
				<div>
					<button type="submit" className="btn btn-outline-warning btn-lg btn-block  mt-4">
						CONTINUE
					</button>
				</div>
			</form>
		</div>
	);
};
