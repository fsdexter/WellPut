import React, { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/signUp.scss";
import room1 from "../../img/room1.png";
import room2 from "../../img/room2.png";
import room3 from "../../img/room3.png";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const { user_id } = useParams();
	const closeBtn = useRef(null);
	const [formValue, setFormValue] = useState({
		name: "",
		last_name: "",
		email: "",
		password: "",
		repeatPassword: ""
	});

	const inputHandelChange = e => {
		//"[e.target.name]" is the name of form inputs
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const handlerSubmit = async e => {
		e.preventDefault();
		const signUpError = await actions.signUp(formValue);
		actions.getLocalStore();
		closeBtn.current.click();

		if (!signUpError) {
			history.push(`/edit_profile/${JSON.parse(localStorage.getItem("user")).id}`);
		}
	};

	return (
		<div className="row container text-center d-flex justify-content-center container-modals" id="myContainer">
			<div className="col-3 no-gutters">
				<div className="col-8 textSignUp">
					<h4 className="text text-white">SIGN UP IN</h4>
					<h1 className="text fs-1 myYellowText well">WELL</h1>
					<h1 className="text fs-1 myYellowText put">PUT</h1>
				</div>
				<div className="col-12" id="imgFlower">
					<div className="row p-0 pb-1 m-0">
						<div className="col-6 p-0 d-flex justify-content-end">
							<img src={room1} className="signUpRoom" />
						</div>
						<div className="col-6 p-0 d-flex justify-content-start" />
					</div>
					<div className="row p-0 m-0">
						<div className="col-6 p-0 pr-1 d-flex justify-content-end">
							<img src={room2} className="signUpRoom" />
						</div>
						<div className="col-6 ml-0 p-0 pl-1 d-flex justify-content-start">
							<img src={room3} className="signUpRoom" />
						</div>
					</div>
				</div>
			</div>

			<div className="col-2 no-gutters d-flex align-items-center" id="tooEasy">
				<h4 className="text myYellowText" id="tooEasyText">
					Is too easy
				</h4>
			</div>
			<div className="col-5 no-gutters singUpBox">
				<form onSubmit={handlerSubmit} className="col-12 p-5 text-white formSignUp">
					<div className="form-grup row mb-4">
						<input
							className="col-12 inputSinLog"
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							onChange={inputHandelChange}
							autoFocus
							required
						/>
					</div>
					<div className="form-grup row mt-2 mb-4">
						<input
							className="col-12 inputSinLog"
							type="text"
							name="name"
							id="name"
							placeholder="Name"
							onChange={inputHandelChange}
							required
						/>
					</div>

					<div className="form-grup row mt-2 mb-4">
						<input
							className="col-12 inputSinLog"
							type="text"
							name="last_name"
							id="last_name"
							placeholder="Last Name"
							onChange={inputHandelChange}
							required
						/>
					</div>

					<div className="form-grup row mt-2 mb-4">
						<input
							className="col-12 inputSinLog"
							type="password"
							name="password"
							placeholder="Password"
							onChange={inputHandelChange}
							required
						/>
					</div>
					<div className="form-grup row mt-2 mb-5">
						<input
							className="col-12 inputSinLog"
							type="password"
							name="repeatPassword"
							placeholder="Repeat Password"
							onChange={inputHandelChange}
							required
						/>
					</div>
					<div>
						<button type="submit" className="btn btnYellow mt-4">
							CONTINUE
						</button>
					</div>
				</form>
			</div>
			<div
				className="col-1 no-gutters iconClose mt-2 m-0 p-0 d-flex justify-content-end close"
				data-dismiss="modal"
				ref={closeBtn}>
				<i className="far fa-window-close text-white fa-lg" />
			</div>
		</div>
	);
};
