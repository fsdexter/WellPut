import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import { AddReview } from "../component/addReview";
import { NotificationRoomie } from "../component/notificationRoomie";
import "../../styles/viewprofile.scss";
import avatar from "/workspace/WellPut/src/front/img/avatar.png";

export const Profile = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	let { user_id } = useParams();

	// Para que haga el get de los datos del usuario nada más cargar la página
	useEffect(() => {
		if (JSON.parse(localStorage.getItem("user"))) {
			actions.getUser(
				JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id
			);
		} else if (JSON.parse(localStorage.getItem("owner"))) {
			actions.getOwner(JSON.parse(localStorage.getItem("owner")).id);
		}
	}, []);

	// // Para que escuche el cambio en los datos del usuario
	// useEffect(() => {
	// 	if (JSON.parse(localStorage.getItem("user"))) {
	// 		actions.getUser(
	// 			JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id
	// 		);
	// 	} else if (JSON.parse(localStorage.getItem("owner"))) {
	// 		actions.getOwner(JSON.parse(localStorage.getItem("owner")).id);
	// 	}
	// }, [JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id]);

	function handleSubmit() {
		history.push(
			`/edit_profile/${JSON.parse(localStorage.getItem("user")).user?.id ||
				JSON.parse(localStorage.getItem("user")).id}`
		);
	}
	function favorites() {
		history.push("/favorites");
	}

	return (
		<div className="picturefond col-12 d-flex justify-content-center text-white">
			<div className="container col-10 detallefondblack">
				{localStorage.getItem("user") ? (
					<>
						<div
							className="row"
							key={
								JSON.parse(localStorage.getItem("user")).user?.id ||
								JSON.parse(localStorage.getItem("user")).id
							}>
							<img
								className="card-img-top roundShape col-4"
								src={
									JSON.parse(localStorage.getItem("user")).user?.avatar_url ||
									JSON.parse(localStorage.getItem("user")).avatar_url
										? JSON.parse(localStorage.getItem("user")).user?.avatar_url ||
										  JSON.parse(localStorage.getItem("user")).avatar_url
										: avatar
								}
								alt="Card image cap"
							/>

							<div className="col-8 text-white">
								<div className="row">
									<h1 className="textwhhite ml-5">
										{JSON.parse(localStorage.getItem("user")).user?.name ||
											JSON.parse(localStorage.getItem("user")).name}{" "}
										{JSON.parse(localStorage.getItem("user")).user?.last_name ||
											JSON.parse(localStorage.getItem("user")).last_name}
									</h1>
								</div>

								<div className="col-12 detallefondblack" id="presentationUser">
									{JSON.parse(localStorage.getItem("user")).user?.city ||
									JSON.parse(localStorage.getItem("user")).city
										? (
												JSON.parse(localStorage.getItem("user")).user?.city ||
												JSON.parse(localStorage.getItem("user")).city
										  ).map(city => {
												return (
													<div className="d-flex mb-5" key={city.id}>
														<i className="fas fa-map-marker-alt fa-2x text-white mr-4"></i>
														<h2>{city.name}</h2>
													</div>
												);
										  })
										: "My house"}

									<h4>
										{JSON.parse(localStorage.getItem("user")).user?.description ||
											JSON.parse(localStorage.getItem("user")).description}
									</h4>
								</div>
							</div>
						</div>
						<div className="row d-flex justify-content-around">
							<div className="col-4 contentfondblack">
								<div className="mb-3">
									<h3>CONTACT</h3>
									<div className="d-flex ml-4 align-items-center">
										<i className="far fa-envelope fa-2x"></i>
										<h5 className="ml-3 align-self-center">
											{JSON.parse(localStorage.getItem("user")).user?.email ||
												JSON.parse(localStorage.getItem("user")).email}
										</h5>
									</div>
								</div>
								<div className="mt-4">
									<h3>SPOKEN LANGUAGES</h3>
									{JSON.parse(localStorage.getItem("user")).user?.languages ||
									JSON.parse(localStorage.getItem("user")).languages
										? (
												JSON.parse(localStorage.getItem("user")).user?.languages ||
												JSON.parse(localStorage.getItem("user")).languages
										  ).map(language => {
												return (
													<div
														key={language.id}
														className="d-flex ml-4 mt-2 align-items-center">
														{" "}
														<i className="far fa-grin-tongue-wink fa-lg"></i>
														<h5 className="ml-3">{language.name}</h5>
													</div>
												);
										  })
										: "I can speak... a lot of languages!! "}
								</div>
							</div>
							<div className="col-4 contentfondblack">
								<h3 className="mb-3">INTEREST</h3>
								{JSON.parse(localStorage.getItem("user")).user?.characteristics ||
								JSON.parse(localStorage.getItem("user")).characteristics
									? (
											JSON.parse(localStorage.getItem("user")).user?.characteristics ||
											JSON.parse(localStorage.getItem("user")).characteristics
									  ).map(characteristic => {
											return (
												<div
													key={characteristic.id}
													className="d-flex ml-4 mt-2 align-items-center">
													<i className="far fa-check-circle fa-lg"></i>
													<h5 className="ml-3 text-capitalize">{characteristic.name}</h5>
												</div>
											);
									  })
									: "I love do... mmmm I need to think "}
							</div>
						</div>
					</>
				) : JSON.parse(localStorage.getItem("owner")) ? (
					<>
						<div className="row" key={JSON.parse(localStorage.getItem("owner")).id}>
							<img
								className="card-img-top roundShape col-4"
								src={
									JSON.parse(localStorage.getItem("owner")).avatar_url
										? JSON.parse(localStorage.getItem("owner")).avatar_url
										: avatar
								}
								alt="Card image cap"
							/>

							<div className="col-8 text-white">
								<div className="row">
									<h1 className="textwhhite ml-5">
										{JSON.parse(localStorage.getItem("owner")).name}{" "}
										{JSON.parse(localStorage.getItem("owner")).last_name}
									</h1>
								</div>

								<div className="col-12 detallefondblack " id="presentationUser">
									{JSON.parse(localStorage.getItem("owner")).city
										? JSON.parse(localStorage.getItem("owner")).city.map(city => {
												return (
													<div className="d-flex mb-5" key={city.id}>
														<i className="fas fa-map-marker-alt fa-2x text-white mr-4"></i>
														<h2>{city.name}</h2>
													</div>
												);
										  })
										: "My house"}

									<h4>{JSON.parse(localStorage.getItem("owner")).description}</h4>
								</div>
							</div>
						</div>
						<div className="row d-flex justify-content-around">
							<div className="col-4 contentfondblack">
								<div className="mb-3">
									<h3>CONTACT</h3>
									<div className="d-flex ml-4 align-items-center">
										<i className="far fa-envelope fa-2x"></i>
										<h5 className="ml-3 align-self-center">
											{JSON.parse(localStorage.getItem("owner")).email}
										</h5>
									</div>
								</div>
								<div className="mt-4">
									<h3>SPOKEN LANGUAGES</h3>
									{JSON.parse(localStorage.getItem("owner")).languages
										? JSON.parse(localStorage.getItem("owner")).languages.map(language => {
												return (
													<div
														key={language.id}
														className="d-flex ml-4 mt-2 align-items-center">
														{" "}
														<i className="far fa-grin-tongue-wink fa-lg"></i>
														<h5 className="ml-3">{language.name}</h5>
													</div>
												);
										  })
										: "I can speak... a lot of languages!! "}
								</div>
							</div>
							<div className="col-4 contentfondblack">
								<h3 className="mb-3">INTEREST</h3>
								{JSON.parse(localStorage.getItem("owner")).characteristics
									? JSON.parse(localStorage.getItem("owner")).characteristics.map(characteristic => {
											return (
												<div
													key={characteristic.id}
													className="d-flex ml-4 mt-2 align-items-center">
													<i className="far fa-check-circle fa-lg"></i>
													<h5 className="ml-3 text-capitalize">{characteristic.name}</h5>
												</div>
											);
									  })
									: "I love do... mmmm I need to think "}
							</div>
						</div>
					</>
				) : (
					<div className="text-center text-warning mt-5">
						<i className="fas fa-spinner fa-pulse fa-6x" />
					</div>
				)}
			</div>
			<div className="col-1" id="containerOptionsProfile">
				<div className="col buttonfondblack  d-flex justify-content-center">
					<button
						type="button"
						className="navbar-brand mb-0 mr-2 btn btn-navb "
						onClick={() => handleSubmit()}>
						<i className="fas fa-user-edit fa-2x text-white"></i>
						<h5 className="textbuttons">Edit Profile</h5>
					</button>
				</div>
				<div className="col buttonfondblack  d-flex justify-content-center">
					<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb" onClick={() => favorites()}>
						<i className="fas fa-heart fa-2x text-white" />
						<h5 className="textbuttons">My Favorites</h5>
					</button>
				</div>
				<div className="col buttonfondblack  d-flex justify-content-center">
					<Link to="/detailedView">
						<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb">
							<i className="fas fa-euro-sign fa-2x text-white" />
							<h5 className="textbuttons">My Rents</h5>
						</button>
					</Link>
				</div>
				<div className="col buttonfondblack  d-flex justify-content-center">
					<Link to="/announcements">
						<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb">
							<i className="fa fa-bed fa-2x text-white" aria-hidden="true" />
							<h5 className="textbuttons">My Rooms</h5>
						</button>
					</Link>
				</div>
				<div className="col buttonfondblack d-flex justify-content-center">
					<button
						type="button"
						className="navbar-brand mb-0 mr-2 btn btn-navb"
						data-toggle="modal"
						data-target="#notificationModal">
						<i className="fa fa-user-plus fa-2x text-white" aria-hidden="true" />
						<h5 className="textbuttons">Add Romie</h5>
					</button>
				</div>
				<div className="col buttonfondblack d-flex justify-content-center">
					<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb" data-target="#addReviewModal">
						<i className="fas fa-user-times fa-2x text-white"></i>
						<h5 className="textbuttons">Delete Romie</h5>
					</button>
				</div>
				<div className="col buttonfondblack d-flex justify-content-center">
					<button
						type="button"
						className="navbar-brand mb-0 mr-2 btn btn-navb"
						data-toggle="modal"
						data-target="#addReviewModal">
						<i className="far fa-comment-dots fa-2x text-white"></i>
						<h5 className="textbuttons">Add review</h5>
					</button>
				</div>
				{/*<!-- add ReviewModal Modal -->*/}
				<div id="addReviewModal" className="modal fade" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<AddReview />
						</div>
					</div>
				</div>

				{/*<!-- notification Modal -->*/}
				<div id="notificationModal" className="modal fade" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<NotificationRoomie />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
