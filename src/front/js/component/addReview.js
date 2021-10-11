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

	const inputHandelChange = e => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const closeBtn = useRef(null);

	const closeModalLogin = () => {
		closeBtn.current.click();
	};

	const reviewSubmit = () => {
		if (JSON.parse(localStorage.getItem("user")) && props.room) {
			actions.addReview(formValue, props.room.id, props.user.id);
			closeModalLogin();
		} else {
			alert("You have not logged in, log in to rate this room!");
		}
	};

	return (
		<div style={{ backgroundColor: "#184F5F" }}>
			<div className="row">
				<div className="col">
					<h3 className="text-comment text-white p-3 mb-0">Tell us your experience living in this room</h3>
				</div>
				<div className="col-1">
					<i className="far fa-window-close text-white fa-lg mt-3" data-dismiss="modal" ref={closeBtn} />
				</div>
			</div>

			<div
				style={{
					backgroundImage: "url(" + props.room.room_url + ")",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center"
				}}>
				<textarea
					className="onCommentStarsReview "
					placeholder="Write here..."
					onChange={inputHandelChange}
					name="comment"
				/>
			</div>
			<div
				style={{
					backgroundColor: "#184F5F",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					padding: "1rem 0 1.5rem 0"
				}}>
				<h4 className="text text-white">How many stars do you give this experience? *</h4>
				<div style={{ cursor: "pointer" }}>
					<Rating />
				</div>
				<button className="btn btnYellow mt-4 px-5" onClick={() => reviewSubmit()}>
					Publish
				</button>
			</div>
		</div>
	);
};

AddReview.propTypes = {
	room: PropTypes.object,
	user: PropTypes.object
};
