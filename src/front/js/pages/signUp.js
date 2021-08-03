import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// Bakend URL
import { API_BASE_URL } from "../constants";

export const SignUp = () => {
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

		// To create a new user directly in DB
		// for this reason the new user does not to be save in the Flux
		const raw = JSON.stringify(formValue);

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: raw,
			redirect: "follow"
		};

		fetch(`${API_BASE_URL}/api/sign_up`, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log("New user was created: ", result);
				// to go "Edit Profile" after the sign up
				history.push("/edit_profile");
				setFormValue({ ...formValue, [e.target.name]: "" });
			})
			.catch(error => console.log("error", error));
	};

	return (
		<div className="container row text-center mt-5  d-flex justify-content-center">
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
						placeholder="Enter yor password"
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
