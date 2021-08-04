import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/signUp.scss";
import room1 from "../../img/room1.png";
import room2 from "../../img/room2.png";
import room3 from "../../img/room3.png";

export const SignUp = () => {
	const { actions } = useContext(Context);
	let history = useHistory();
	const [formValue, setFormValue] = useState({
		fullName: "",
		email: "",
		password: "",
		repearPassword: ""
	});

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
		<div className="container row text-center mt-5 d-flex justify-content-center myContainer">
			<div>
				<div className="col-6">
					<h4 className="text text-white">SIGN UP IN</h4>
					<h1 className="text text-warning">WELL PUT</h1>
				</div>
				<div className="row">
					<div className="col-6 d-flex flex-column">
						<img src={room1} />
						<img src={room2} />
					</div>
					<div className="col-6" id="room3">
						<img src={room3} id="imgr3" />
					</div>
				</div>
			</div>

			<div className=" col-2">
				<h4 className="text text-warning">Is too easy</h4>
			</div>
			<div className="singUpBox col-4">
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
		</div>
	);
};
