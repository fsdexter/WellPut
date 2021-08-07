import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { SignUp } from "../pages/signUp";

import logo from "../../img/logo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white no-gutters">
			<div className="col-2">
				<Link to="/">
					<img src={logo} id="logo" />
				</Link>
			</div>
			<div className="col-10" id="marron">
				<div className="col-12" id="amarillo">
					<div className="buttons d-flex justify-content-end">
						{/*<Link to="/sign_up">*/}
						<span
							className="navbar-brand mb-0 mr-5 btn"
							data-bs-toggle="modal"
							data-bs-target="#staticBackdrop">
							Sign Up
						</span>
						{/*</Link>*/}

						{/* <button
							type="button"
							className="btn btn-info btn-lg"
							data-toggle="modal"
							data-target="#myModal">
							Open Modal
						</button> */}

						<Link to="/login">
							<span
								className="navbar-brand mb-0 mr-5 btn"
								data-bs-toggle="modal"
								data-bs-target="#loginModal">
								Login
							</span>
						</Link>
						<Link to="/">
							<span className="navbar-brand mb-0 mr-2 btn" onClick={() => actions.logOut()}>
								Log Out
							</span>
						</Link>
					</div>
				</div>
			</div>

			{/*<!-- Modal -->*/}
			{/* <div id="myModal" className="modal fade" role="dialog">
				<div className="modal-dialog"> */}
					{/*<!-- Modal Content -->*/}
					{/* <div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
							<h4 className="modal-title">Modal Header</h4>
						</div>
						<div className="modal-body">
							<p>Some text in the modal.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">
								Close
							</button>
						</div>
					</div>
				</div>
			</div> */}
		</nav>
	);
};
