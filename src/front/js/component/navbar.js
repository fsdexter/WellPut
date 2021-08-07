import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { SignUp } from "../pages/signUp";
import { Login } from "../pages/login";

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
			<div className="col-10" id="brown">
				<div className="col-12" id="yellow">
					<div className="buttons d-flex justify-content-end">
						<button type="button" className="btn" data-toggle="modal" data-target="#signUpModal">
							Sign Up
						</button>
						<button type="button" className="btn" data-toggle="modal" data-target="#loginModal">
							Login
						</button>
						<Link to="/">
							<span className="navbar-brand mb-0 mr-2 btn" onClick={() => actions.logOut()}>
								Log Out
							</span>
						</Link>
					</div>
				</div>
			</div>

			{/*<!-- SignUp Modal -->*/}
			<div id="signUpModal" className="modal fade" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<SignUp />
					</div>
				</div>
			</div>

			{/*<!-- Login Modal -->*/}
			<div id="loginModal" className="modal fade" role="dialog">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<Login />
					</div>
				</div>
			</div>
		</nav>
	);
};
