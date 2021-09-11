import React, { Component } from "react";
import MyMap from "./mapEngine";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer>
		<div className="row divfooter mt-5 text-white">
			<div className="col-7 d-flex flex-column social-media">
				<div className="row d-flex justify-content-around">
					<a target="_blank" rel="noreferrer" href="https://www.instagram.com/" className="a-link-footer">
						<i className="fab fa-instagram fa-2x mt-2" />
					</a>
					<a target="_blank" rel="noreferrer" href="https://twitter.com/" className="a-link-footer">
						<i className="fab fa-twitter fa-2x mt-2" />
					</a>
					<a target="_blank" rel="noreferrer" href="https://www.facebook.com/" className="a-link-footer">
						<i className="fab fa-facebook-square fa-2x mt-2" />
					</a>
				</div>

				<div className="row d-flex justify-content-around footer-adress">
					<p className="d-flex justify-content-around">
						<i className="far fa-envelope fa-lg mr-3" /> <p>genesisfniv@gmail.com</p>
					</p>
					<p className="d-flex justify-content-around">
						<i className="fas fa-map-marker-alt fa-lg mr-3" /> <p>Edison 3, 28006, Madrid</p>
					</p>
				</div>
			</div>

			<div className="col-5 mt-4">
				<MyMap
					center={{ lat: 40.416775, lng: -3.70379 }}
					style={{ width: "700px", height: "320px" }}
					zoom={10}
				/>
			</div>
		</div>
	</footer>
);
