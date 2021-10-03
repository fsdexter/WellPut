import React, { useState, useContext, useRef } from "react";
import { Context } from "../store/appContext";

import "../../styles/recoverPassword.scss";

export const RecoverPassword = () => {
	const { actions } = useContext(Context);
	const closeBtn = useRef(null);

	const [formValue, setFormValue] = useState({
		email: "",
		code: "",
		newPassword: "",
		repeatNewPassword: ""
	});

	const [errorMsg, setErrorMsg] = useState(null);

	const inputHandelChange = e => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const closeModalRecoverPass = () => {
		closeBtn.current.click();
	};

	const handlerSubmit = async e => {
		e.preventDefault();

		let recoverPassError = await actions.recoverPassword(formValue);

		if (recoverPassError) {
			setErrorMsg(recoverPassError);
		} else {
			closeModalRecoverPass();
		}
	};

	return (
		<div className="row container text-center d-flex justify-content-around container-modals">
			<div className="col-5" id="recoverPassImg">
				<div className="onLoginRoom pl-3 pt-5">
					<h1 className="text fs-1 myYellowText ml-2 well">WELL</h1>
					<h1 className="text fs-1 myYellowText ml-2 put custom-ml">PUT</h1>
					<h2 className="text myYellowText mt-5">I forgot my password</h2>
				</div>
			</div>
			<div className="col-5 mt-2">
				<div
					className="iconClose mt-4 m-0 p-0 d-flex justify-content-end close"
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

				<form onSubmit={handlerSubmit} className="col-12 p-5 myBox text-white" id="recoPassForm">
					<div className="form-grup row mt-2">
						<input
							className="col-12 inputSinLog"
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							onChange={inputHandelChange}
							required
						/>
					</div>
					<button className="btn btnYellow2 mt-4 mb-4">Password Recovery</button>
					<div className="form-grup row mt-4">
						<input
							className="col-12 inputSinLog"
							type="text"
							name="code"
							id="code"
							placeholder="Code"
							onChange={inputHandelChange}
							required
						/>
					</div>
					{formValue.code !== "" ? (
						<>
							<div className="form-grup row mt-5">
								<input
									className="col-12 inputSinLog"
									type="password"
									name="newPassword"
									placeholder="New password"
									onChange={inputHandelChange}
									required
								/>
							</div>
							<div className="form-grup row mt-4">
								<input
									className="col-12 inputSinLog"
									type="password"
									name="repeatNewPassword"
									placeholder="Repeat New Password"
									onChange={inputHandelChange}
									required
								/>
							</div>
						</>
					) : (
						<>
							<div className="form-grup row mt-4">
								<input
									className="col-12 inputSinLog"
									type="password"
									name="newPassword"
									placeholder="New password"
									onChange={inputHandelChange}
									required
									disabled
								/>
							</div>
							<div className="form-grup row mt-4">
								<input
									className="col-12 inputSinLog"
									type="password"
									name="repeatNewPassword"
									placeholder="Repeat New Password"
									onChange={inputHandelChange}
									required
									disabled
								/>
							</div>
						</>
					)}

					<button type="submit" className="btn btnYellow mt-5">
						CONTINUE
					</button>
				</form>
			</div>
		</div>
	);
};
