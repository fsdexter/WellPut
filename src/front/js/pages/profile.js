import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import { AddReview } from "../component/addReview";
import { NotificationRoomie } from "../component/notificationRoomie";
import "../../styles/viewprofile.scss";

export const Profile = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	let { id } = useParams();

	useEffect(() => {
		actions.getUser(JSON.parse(localStorage.getItem("user")).user.id);
		// actions.getUser(id);
		// actions.getUserAuthentificted();
	}, []);
	// useEffect(() => {
	// 	loadUser();
	// }, []);

	// const loadUser = async () => {
	// 	await actions.getUser(JSON.parse(localStorage.getItem("user")));
	// };

	function handleSubmit() {
		history.push(`/edit_profile/${JSON.parse(localStorage.getItem("user")).user.id}`);
	}
	function favorites() {
		history.push("/favorites");
	}

	return (
		<div className="picturefond col-12 d-flex justify-content-center text-white">
			<div className="container col-10 detallefondblack">
				{store.user || localStorage.getItem("user") ? (
					<>
						<div className="row" key={JSON.parse(localStorage.getItem("user")).user.id || store.user.id}>
							<img
								className="card-img-top roundShape col-4"
								src={
									JSON.parse(localStorage.getItem("user")).user.avatar_url || store.user.avatar_url
										? JSON.parse(localStorage.getItem("user")).user.avatar_url ||
										  store.user.avatar_url
										: "https://img.freepik.com/vector-gratis/silueta-hombre-rostro-cuenta-usuario-web-concepto-icono-aislado-imagen-personaje-masculino-que-utiliza-verificacion-presentacion-linea_275655-275.jpg?size=626&ext=jpg"
								}
								alt="Card image cap"
							/>

							<div className="col-8 text-white">
								<div className="row">
									<h1 className="textwhhite ml-5">
										{JSON.parse(localStorage.getItem("user")).user.name || store.user.name}
										{JSON.parse(localStorage.getItem("user")).user.last_name ||
											store.user.last_name}
									</h1>
									<div className="d-flex align-items-center ml-3">
										{/** LAS ESTRELLAS PROCEDDEN DE LAS REVIEWS */}
										<i className="fa fa-star start fa-lg mr-2" aria-hidden="true" />
										<i className="fa fa-star start fa-lg mr-2" aria-hidden="true" />
										<i className="fa fa-star start fa-lg mr-2" aria-hidden="true" />
										<i className="fa fa-star start fa-lg mr-2" aria-hidden="true" />
										<i className="fa fa-star start fa-lg" aria-hidden="true" />
									</div>
								</div>

								<div className="col-12 detallefondblack" id="presentationUser">
									<div className="d-flex mb-5">
										<i className="fas fa-map-marker-alt fa-2x text-white mr-4"></i>
										<h2>
											{JSON.parse(localStorage.getItem("user")).user.city_id ||
												store.user.city_id}
										</h2>
									</div>

									<h3>
										{JSON.parse(localStorage.getItem("user")).user.description ||
											store.user.description}
									</h3>
								</div>
							</div>
						</div>
						<div className="row d-flex justify-content-around">
							<div className="col-4 contentfondblack">
								<div className="mb-3">
									<h3>CONTACT</h3>

									<h5>{JSON.parse(localStorage.getItem("user")).user.email || store.user.email}</h5>
								</div>
								<div className="mt-4">
									<h3>SPOKEN LANGUAGES</h3>
									<h5>
										{/* {(
											JSON.parse(localStorage.getItem("user")).user.languages ||
											store.user.languages
										).map((language, indx) => {
											<h5 key={indx}>{language.name}</h5>;
										})} */}
										Idiomas que habla el usuario
									</h5>
								</div>
							</div>
							<div className="col-4 contentfondblack">
								<h3 className="mb-3">INTEREST</h3>
								<h5>
									{/* {JSON.parse(localStorage.getItem("user")).user.characteristics ||
										store.user.characteristics} */}
									Intereses personales del usuario
								</h5>
							</div>
						</div>
					</>
				) : null}
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
