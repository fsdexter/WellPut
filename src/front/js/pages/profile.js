import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { NotificationRoomie } from "../component/notificationRoomie";

import "../../styles/viewprofile.scss";
import avatar from "/workspace/WellPut/src/front/img/avatar.png";

export const Profile = () => {
	const history = useHistory();
	const { actions, store } = useContext(Context);
	let { user_id } = useParams();
	let userId = JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id;
	let user = JSON.parse(localStorage.getItem("user")).user || JSON.parse(localStorage.getItem("user"));

	let appliedUser;
	user.rooms.map(room => (room.temporal_renter = appliedUser));

	const [notificateRenter, setNotificateRenter] = useState(appliedUser);
	console.log(notificateRenter);

	// ********* INTO DE QUITAR LA CAMPANITA SIN RECARGAR LA PÁGINA **********
	// let haveTemporalRenter = user.rooms.some(room => room.temporal_renter !== null); // es un boolean
	//const [isNotificate, setIsNotificate] = useState();

	useEffect(() => {
		actions.getUser(userId);
	}); // =============================>>>>>>>>>>>>> HAY QUE ARREGLAR ESTO

	// useEffect(() => {
	// 	actions.getUser(userId);
	// 	// ********* INTO DE QUITAR LA CAMPANITA SIN RECARGAR LA PÁGINA **********
	// 	// store.user && setIsNotificate(store.user.rooms.some(room => room.temporal_renter !== null));
	// }, []);

	// ********* INTO DE QUITAR LA CAMPANITA SIN RECARGAR LA PÁGINA **********
	// useEffect(() => {
	// 	actions.getUser(userId);
	// 	// setIsNotificate(store.user.rooms.some(room => room.temporal_renter !== null));
	// }, [isNotificate]);

	function handleSubmit() {
		history.push(`/edit_profile/${userId}`);
	}
	function favorites() {
		history.push("/favorites");
	}

	return (
		<div className="picturefond col-12 d-flex justify-content-center text-white">
			<div className="container col-10 detallefondblack">
				{localStorage.getItem("user") ? (
					<>
						<div className="row" key={userId}>
							<img
								className="col-4 card-img-top roundShape avatar-profile"
								src={user.avatar_url ? user.avatar_url : avatar}
								alt="Card image cap"
							/>

							<div className="col-8 text-white">
								<div className="row">
									<h1 className="textwhhite ml-5">
										{user.name} {user.last_name}
									</h1>
								</div>

								<div className="col-12 detallefondblack" id="presentationUser">
									{user.city
										? user.city.map(city => {
												return (
													<div className="d-flex mb-5" key={city.id}>
														<i className="fas fa-map-marker-alt fa-2x mr-4 yellow-icon"></i>
														<h2>{city.name}</h2>
													</div>
												);
										  })
										: "My house"}

									<h4>{user.description}</h4>
								</div>
							</div>
						</div>
						<div className="row d-flex justify-content-around">
							<div className="col-4 contentfondblack">
								<div className="mb-3">
									<h3>CONTACT</h3>
									<div className="d-flex ml-4 align-items-center">
										<i className="far fa-envelope fa-2x yellow-icon"></i>
										<h5 className="ml-3 align-self-center">{user.email.email}</h5>
									</div>
								</div>
								<div className="mt-4">
									<h3>SPOKEN LANGUAGES</h3>
									{user.language
										? user.language.map(idiom => {
												return (
													<div key={idiom.id} className="d-flex ml-4 mt-2 align-items-center">
														<i className="far fa-grin-tongue-wink fa-lg yellow-icon"></i>
														<h5 className="ml-3">{idiom.name}</h5>
													</div>
												);
										  })
										: "I can speak... a lot of languages!! "}
								</div>
							</div>
							<div className="col-4 contentfondblack">
								<h3 className="mb-3">INTEREST</h3>
								{user.characteristic
									? user.characteristic.map(interest => {
											return (
												<div key={interest.id} className="d-flex ml-4 mt-2 align-items-center">
													<i className="far fa-check-circle fa-lg yellow-icon"></i>
													<h5 className="ml-3 text-capitalize">{interest.name}</h5>
												</div>
											);
									  })
									: "I love do... mmmm I need to think "}
							</div>
						</div>
					</>
				) : (
					<div className="text-center text-warning spiner-loading-data">
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
						<i className="fas fa-user-edit fa-2x text-white btn-options-profile"></i>
						<h5 className="textbuttons">Edit Profile</h5>
					</button>
				</div>
				<div className="col buttonfondblack  d-flex justify-content-center">
					<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb" onClick={() => favorites()}>
						<i className="fas fa-heart fa-2x text-white btn-options-profile" />
						<h5 className="textbuttons">My Favorites</h5>
					</button>
				</div>
				{user.current_room ? (
					<div className="col buttonfondblack  d-flex justify-content-center">
						<Link
							to={`/detailedView/${user.current_room ||
								JSON.parse(localStorage.getItem("user")).current_room}`}>
							<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb">
								<i className="fas fa-euro-sign fa-2x text-white btn-options-profile" />
								<h5 className="textbuttons">My Rents</h5>
							</button>
						</Link>
					</div>
				) : null}

				<div className="col buttonfondblack  d-flex justify-content-center">
					<Link to="/announcements">
						<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb">
							<i className="fa fa-bed fa-2x text-white btn-options-profile" aria-hidden="true" />
							<h5 className="textbuttons">My Rooms</h5>
						</button>
					</Link>
				</div>

				{user.rooms.length
					? user.rooms.some(room => room.temporal_renter !== null) && (
							<div className="col buttonfondblack d-flex justify-content-center">
								<button
									type="button"
									className="navbar-brand mb-0 mr-2 btn btn-navb"
									data-toggle="modal"
									data-target="#notificationModal">
									<i className="fas fa-bell fa-2x text-white notifications-bell" aria-hidden="true" />
									<h5 className="textbuttons">Notifications</h5>
								</button>
							</div>
					  )
					: null}

				{/* {user.rooms.length
				// ********* INTO DE QUITAR LA CAMPANITA SIN RECARGAR LA PÁGINA **********
					? isNotificate && (
							<div className="col buttonfondblack d-flex justify-content-center">
								<button
									type="button"
									className="navbar-brand mb-0 mr-2 btn btn-navb"
									data-toggle="modal"
									data-target="#notificationModal">
									<i className="fas fa-bell fa-2x text-white notifications-bell" aria-hidden="true" />
									<h5 className="textbuttons">Notifications</h5>
								</button>
							</div>
					  )
					: null} */}

				{/*<!-- Notification Modal -->*/}
				<div id="notificationModal" className="modal fade" role="dialog">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							{/* <NotificationRoomie rooms={user.rooms} setIsNotificate={setIsNotificate} /> */}
							<NotificationRoomie rooms={user.rooms} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
