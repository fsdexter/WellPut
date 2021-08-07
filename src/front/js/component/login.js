import React, { useState, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.scss";

export const Login = () => {
	const { actions } = useContext(Context);
	const closeBtn = useRef(null);

	const [formValue, setFormValue] = useState({
		email: "",
		password: ""
	});

	const [errorMsg, setErrorMsg] = useState(null);

	const inputHandelChange = e => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const handlerSubmit = async e => {
		e.preventDefault();
		// login function
		let loginError = await actions.login(formValue);

		if (loginError) {
			setErrorMsg(loginError);
		} else {
			closeBtn.current.click();
		}
	};

	return (
		<div className="row container text-center d-flex justify-content-around" id="loginContainer">
			<div className="col-4" id="loginImg">
				<div className="onLoginRoom pl-3 pt-5">
					<h1 className="text fs-1 myYellowText ml-2 well">WELL</h1>
					<h1 className="text fs-1 myYellowText ml-2 put custom-ml">PUT</h1>
					<h4 className="text text-white mt-5">
						<span className="myYellowText">We help you</span> find the ideal place for you!
					</h4>
					<h4 className="text text-white mt-3">
						<span className="myYellowText">A perfect space</span> with suitable companions ...
					</h4>
				</div>
			</div>
			<div className="col-6 mt-2">
				<div
					className="iconClose mt-2 m-0 p-0 d-flex justify-content-end close"
					data-dismiss="modal"
					ref={closeBtn}>
					<i className="far fa-window-close text-white fa-lg" />
				</div>
				{errorMsg ? (
					<div className="alert alert-danger alert-dismissible fade show" role="alert">
						{errorMsg}
						<button
							type="button"
							className="close"
							data-dismiss="alert"
							onClick={() => setErrorMsg(null)}
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				) : null}

				<form onSubmit={handlerSubmit} className="col-12 p-5 mt-5 myBox text-white" id="loginForm">
					<div className="form-grup row mt-2">
						<input
							className="col-12"
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							onChange={inputHandelChange}
							required
						/>
					</div>
					<div className="form-grup row mt-4">
						<input
							className="col-12"
							type="password"
							name="password"
							placeholder="Password"
							onChange={inputHandelChange}
							required
						/>
					</div>
					<p className="recoverPass">Recover password</p>

					<button type="submit" className="btn btnYellow mt-4">
						LOGIN
					</button>
				</form>
				<div className="signUpButton pb-5">
					<div className="d-flex flex-column create-acount">
						<span>Don’t have an account?</span>
						<span>create one here</span>
					</div>
					<button
						className="btn btnYellow"
						data-dismiss="modal"
						data-toggle="modal"
						data-target="#signUpModal">
						SIGN UP
					</button>
				</div>
			</div>
		</div>
	);
};
