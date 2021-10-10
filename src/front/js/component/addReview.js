import React, { useState, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { Rating } from "../component/rating";
import PropTypes from "prop-types";
import "../../styles/addReview.scss";

export const AddReview = props => {
	const { store, actions } = useContext(Context);

	const [formValue, setFormValue] = useState({
		comment: ""
	});
	/////////////
	const inputHandelChange = e => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};
	////////////////////////////////////////
	const closeBtn = useRef(null);

	const closeModalLogin = () => {
		closeBtn.current.click();
	};
	///////////////////////

	const reviewSubmit = () => {
		if (JSON.parse(localStorage.getItem("user")) && props.room) {
			actions.addReview(formValue, props.room.id, props.user.id);
			closeModalLogin();
		} else {
			alert("You have not logged in, log in to rate this room!");
		}
	};

	return (
		<div className="row container text-center d-flex flex-column container-modals">
			<div
				className="iconClose mt-3  m-0 p-0 d-flex justify-content-end close"
				data-dismiss="modal"
				ref={closeBtn}>
				<i className="far fa-window-close text-white fa-lg" />
			</div>
			<div className="row d-flex justify-content-around mb-4 m-2" id="containerAddReview">
				<div
					className="col-12 mt-1  m-0 p-0 d-flex justify-content-around"
					style={{
						backgroundImage: "url(" + props.room.room_url + ")",
						backgroundSize: "95% 80%",
						height: "40rem",
						marginLeft: "7rem",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center"
					}}>
					<div className="row justify-content-center onCommentStarsReview" id="containerAddReview">
						<h3 className="text-comment text-white  ">Tell us your experience living in this room :</h3>

						<textarea
							className="onCommentStarsReview commentReview "
							placeholder="Write here..."
							onChange={inputHandelChange}
							name="comment"
						/>
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-center mt-0">
				<div className="col-12">
					<div className="onCommentStarsReview p-1 d-flex flex-column">
						<h4 className="text text-white">How many stars do you give this experience? *</h4>
						<div className="mt-3 mb-2 d-flex justify-content-center">
							<Rating />
						</div>
						<button className="btn btnYellow mt-4" onClick={() => reviewSubmit()}>
							Publish
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
AddReview.propTypes = {
	room: PropTypes.object,
	user: PropTypes.object
};
