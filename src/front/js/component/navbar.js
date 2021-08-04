import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div>
				<Link to="/sign_up">
					<span className="navbar-brand mb-0 h1 mr-5">Sign Up</span>
				</Link>
				<Link to="/login">
					<span className="navbar-brand mb-0 h1 mr-5">Login</span>
				</Link>
				<Link to="/login">
					<span className="navbar-brand mb-0 h1 mr-5" onClick={() => actions.logOut()}>
						Log Out
					</span>
				</Link>
			</div>
		</nav>
	);
};
