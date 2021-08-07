import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
	const { actions } = useContext(Context);
	let history = useHistory();

	const [formValue, setFormValue] = useState({
		email: "",
		password: ""
	});

	const inputHandelChange = e => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const handlerSubmit = e => {
		e.preventDefault();
		// login function
		actions.login(formValue);
	};

	// to go home after the sign up
	if (actions.isUserAuthentificted()) {
		history.push("/");
	}

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
						type="password"
						name="password"
						placeholder="Password"
						onChange={inputHandelChange}
						required
					/>
				</div>
				<div>
					<button type="submit" className="btn btn-outline-primary btn-lg btn-block  mt-4">
						Login
					</button>
				</div>
			</form>
		</div>
	);
};
