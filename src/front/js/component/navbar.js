import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

import { SignUp } from "./signUp";
import { Login } from "./login";

import logo from "../../img/logo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const goodbye = () => {
		actions.logOut();
		history.push("/");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white no-gutters">
			<div className="col-2">
				<Link to="/">
					<img src={logo} id="logo" />
				</Link>
			</div>
			<div className="col-10" id="brown">
				{store.user !== null ? (
					<div className="col-12 d-flex justify-content-between" id="yellow">
						<Link to="/profile">
							<span className="navbar-brand mb-0 mr-2 btn btn-navb">Profile</span>
						</Link>
						<Link to="/announcements">
							<span className="navbar-brand mb-0 mr-2 btn btn-navb">Announcements</span>
						</Link>
						<Link to="/favorites">
							<span className="navbar-brand mb-0 mr-2 btn btn-navb">Favorites</span>
						</Link>
						<Link to="/">
							<span className="navbar-brand mb-0 mr-2 btn btn-navb">Search</span>
						</Link>
						<Link to="/">
							<span className="navbar-brand mb-0 mr-2 btn btn-navb" onClick={() => goodbye()}>
								Log Out
							</span>
						</Link>
					</div>
				) : (
					<div className="col-12 d-flex justify-content-end" id="yellow">
						<button
							type="button"
							className="navbar-brand mb-0 mr-2 btn btn-navb"
							data-toggle="modal"
							data-target="#signUpModal">
							Sign Up
						</button>
						<button
							type="button"
							className="navbar-brand mb-0 mr-2 btn btn-navb"
							data-toggle="modal"
							data-target="#loginModal">
							Login
						</button>
					</div>
				)}
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
