import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { AddReview } from "../component/addReview";
import { NotificationRoomie } from "../component/notificationRoomie";
import "../../styles/viewprofile.scss";
import firtsimgprofile from "../../img/photoprofile.png";
import argentina from "../../img/argentina.png";
import map from "../../img/outline.png";

export const Profile = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	function handleSubmit() {
		history.push("/edit_profile");
	}
	function favorites() {
		history.push("/favorites");
	}
	return (
		<div className="picturefond col-lg-12 d-inline-flex">
			<div className="container col-lg-10 detallefondblack">
				<div className="row">
					<img className="card-img-top roundShape col-lg-4" src={firtsimgprofile} alt="Card image cap" />
					<div className="col-8">
						<div className="col-8">
							<div className="row">
								<img
									className="card-img-top roundShape"
									src={argentina}
									alt="Card image cap"
									style={{ width: "48px", height: "78px" }}
								/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<h3 className="textwhhite">Jason Becker-29</h3>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<p>
									<p>
										<i className="fa fa-star start" aria-hidden="true" />
									</p>
								</p>
								&nbsp;&nbsp;
								<p>
									<p>
										<i className="fa fa-star start" aria-hidden="true" />
									</p>
								</p>
								&nbsp;&nbsp;
								<p>
									<p>
										<i className="fa fa-star start" aria-hidden="true" />
									</p>
								</p>
								&nbsp;&nbsp;
								<p>
									<p>
										<i className="fa fa-star start" aria-hidden="true" />
									</p>
								</p>
								&nbsp;&nbsp;
								<p>
									<p>
										<i className="fa fa-star start" aria-hidden="true" />
									</p>
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-9" style={{ width: "148px", height: "108px" }} />
							<div className="col-9 detallefondblack " style={{ width: "48rem", height: "20rem" }}>
								<img
									className="card-img-top roundShape"
									src={map}
									alt="Card image cap"
									style={{ width: "38px", height: "58px" }}
								/>
								<h3>Sevilla </h3>
								<p />
								<h3 />
								<h5>
									Hello, there! My name is Jason and i am looking for some new roomies to live but
									also to 5 share a beer eventually
								</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="row ">
					<div className="col contentfondblack" style={{ width: "120px", height: "600px" }}>
						<h2 className="textwhhite">CONTACT</h2>
						<p className="textwhhite">jason_29@yahoo.es</p>
						<h2 className="textwhhite">SPOKEN LANGUAGES</h2>
						<p className="textwhhite">*English</p>
						<p className="textwhhite">*Spanish</p>
						<p className="textwhhite">*French</p>
					</div>
					<div className="col contentfondblack" style={{ width: "120px", height: "600px" }}>
						<h2 className="textwhhite">INTEREST</h2>
						<p className="textwhhite">*Musician</p>
						<p className="textwhhite">*Traveler</p>
						<p className="textwhhite">*Movies</p>
						<p className="textwhhite">*Dancer</p>
						<p className="textwhhite">*Vegan</p>
						<p className="textwhhite">*Animal Lover</p>
					</div>
				</div>
			</div>
			<div className="col-1 ">
				<div className="col buttonfondblack" style={{ width: "190px", height: "120px" }}>
					<button
						type="button"
						className="navbar-brand mb-0 mr-2 btn btn-navb"
						onClick={() => handleSubmit()}>
						<i className="fa fa-bars" aria-hidden="true" style={{ color: "white" }} />
						<p className="textbuttons">Edit Profile</p>
					</button>
				</div>
				<div className="col buttonfondblack" style={{ width: "190px", height: "120px" }}>
					<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb" onClick={() => favorites()}>
						<i className="fas fa-heart" style={{ color: "white" }} />
						<p className="textbuttons">My Favorites</p>
					</button>
				</div>
				<div className="col buttonfondblack" style={{ width: "190px", height: "120px" }}>
					<Link to="/detailedView">
						<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb">
							<i className="fas fa-euro-sign" style={{ color: "white" }} />
							<p className="textbuttons">My Rents</p>
						</button>
					</Link>
				</div>
				<div className="col buttonfondblack" style={{ width: "190px", height: "120px" }}>
					<Link to="/announcements">
						<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb">
							<i className="fa fa-bed" aria-hidden="true" style={{ color: "white" }} />
							<p className="textbuttons">My Rooms</p>
						</button>
					</Link>
				</div>
				<div className="col buttonfondblack" style={{ width: "190px", height: "120px" }}>
					<button
						type="button"
						className="navbar-brand mb-0 mr-2 btn btn-navb"
						data-toggle="modal"
						data-target="#notificationModal">
						<i className="fa fa-user-plus" aria-hidden="true" style={{ color: "white" }} />
						<p className="textbuttons">Add Romie</p>
					</button>
				</div>
				<div className="col buttonfondblack" style={{ width: "190px", height: "120px" }}>
					<button type="button" className="navbar-brand mb-0 mr-2 btn btn-navb" data-target="#addReviewModal">
						<i className="fas fa-backspace" aria-hidden="true" style={{ color: "white" }} />
						<p className="textbuttons">Delete Romie</p>
					</button>
				</div>
				<div className="col buttonfondblack" style={{ width: "190px", height: "120px" }}>
					<button
						type="button"
						className="navbar-brand mb-0 mr-2 btn btn-navb"
						data-toggle="modal"
						data-target="#addReviewModal">
						<i className="fa fa-user-plus" aria-hidden="true" style={{ color: "white" }} />
						<p className="textbuttons">Add review</p>
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
