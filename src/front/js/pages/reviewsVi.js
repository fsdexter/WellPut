import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import review1 from "../../img/review1.png";
import review2 from "../../img/review2.png";
import "../../styles/reviewsVi.scss";

export const Reviews = () => {
	const { store, actions } = useContext(Context);
	let { room_id } = useParams();
	console.log("room_id en comentarios : ", room_id);

	useEffect(() => {
		//actions.getReviews(room_id);
		actions.getReviews(1);
	}, []);

	console.log(store.reviewsRoom);

	return (
		<>
			<div className="container out">
				<div className="row top">top row</div>
				<div className="row d-flex ">
					<div className="col-6">
						<div className="container review-box">
							<h4 className="secondary">proprietari review</h4>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review1} />
								</div>
								<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review1} />
								</div>
								<div>Lorem ipsum dolor sit amet.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review1} />
								</div>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eveniet quibusdam,
									maiores accusantium rerum laboriosam!
								</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review1} />
								</div>
								<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review1} />
								</div>
								<div>Lorem ipsum dolor sit amet.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review1} />
								</div>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eveniet quibusdam,
									maiores accusantium rerum laboriosam!
								</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review1} />
								</div>
								<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review1} />
								</div>
								<div>Lorem ipsum dolor sit amet.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review1} />
								</div>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eveniet quibusdam,
									maiores accusantium rerum laboriosam!
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="container review-box">
							<h4 className="secondary">oner review</h4>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review2} />
								</div>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eveniet quibusdam,
									maiores accusantium rerum laboriosam!
								</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review2} />
								</div>
								<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review2} />
								</div>
								<div>Lorem ipsum dolor sit amet.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review2} />
								</div>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eveniet quibusdam,
									maiores accusantium rerum laboriosam!
								</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review2} />
								</div>
								<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review2} />
								</div>
								<div>Lorem ipsum dolor sit amet.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review2} />
								</div>
								<div>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eveniet quibusdam,
									maiores accusantium rerum laboriosam!
								</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review2} />
								</div>
								<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ea.</div>
							</div>
							<div className="d-flex review">
								<div className="imgbox">
									<img src={review2} />
								</div>
								<div>Lorem ipsum dolor sit amet.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
