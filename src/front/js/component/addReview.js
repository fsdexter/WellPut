import React, { useState, useContext, useRef } from "react";
import { Context } from "../store/appContext";

import { Rating } from "../component/rating";

import "../../styles/addReview.scss";

export const AddReview = () => {
	const { actions } = useContext(Context);
	const closeBtn = useRef(null);

	const closeModalLogin = () => {
		closeBtn.current.click();
	};

	const reviewSubmit = () => {
		actions.addReview();
		closeModalLogin();
	};

	return (
		<div className="row container text-center d-flex flex-column" id="loginContainer">
			<div
				className="iconClose mt-3  m-0 p-0 d-flex justify-content-end close"
				data-dismiss="modal"
				ref={closeBtn}>
				<i className="far fa-window-close text-white fa-lg" />
			</div>
			<div className="d-flex flex-column mt-4">
				<div className="row d-flex justify-content-around mb-3 m-2" id="containerAddReview">
					<div className="col-5" id="ownerIMReview">
						<div className="onIMReview pl-3 pt-5">
							<h3 className="text fs-1 myYellowText ml-2 mb-4 text-white well">
								Tell us your experience living with Mía :
							</h3>

							<textarea className="form-control commentReview" placeholder="Write here..." />
						</div>
					</div>
					<div className="col-6" id="roomIMReview">
						<div className="onIMReview pt-5 ml-2">
							<h3 className="text myYellowText ml-4 mb-4 text-white well">
								Tell us your experience living in this room :
							</h3>

							<textarea className="form-control commentReview ml-3" placeholder="Write here..." />
						</div>
					</div>
				</div>

				<div className="row d-flex justify-content-center mt-3">
					<div className="col-12">
						<div className="onCommentStarsReview p-3 d-flex flex-column">
							<h4 className="text text-white">How many stars do you give this experience? *</h4>
							<div className="mt-3 mb-2">
								<Rating />
							</div>
							<button className="btn btnYellow mt-4" onClick={() => reviewSubmit()}>
								Publish
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
