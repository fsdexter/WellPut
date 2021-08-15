import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";
import { SignUp } from "./component/signUp";
import { Login } from "./component/login";
import { EditProfile } from "./pages/editProfile";
import { Profile } from "./pages/profile";
import { Announcements } from "./pages/announcements";
import { Favorites } from "./pages/favorites";
import { NewAnnouncement } from "./pages/newAnnouncement";
import { Navbar } from "./component/navbar";
import { DetailedView } from "./pages/detailedView";

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/sign_up">
							<SignUp />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/detailedView">
							<DetailedView />
						</Route>
						<Route exact path="/edit_profile">
							<EditProfile />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route exact path="/announcements">
							<Announcements />
						</Route>
						<Route exact path="/newAnnouncement">
							<NewAnnouncement />
						</Route>
						<Route exact path="/favorites">
							<Favorites />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
