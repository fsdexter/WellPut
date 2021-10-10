import React, { Component } from "react";
import MapBox from "../component/MapBox";
import "../../styles/footer.scss";

export const Footer = () => (
	<div className="row divfooter mt-5 text-white mr-0">
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
					<i className="far fa-envelope fa-lg mr-3 mt-1" /> <span>genesisfniv@gmail.com</span>
				</p>
				<p className="d-flex justify-content-around">
					<i className="fas fa-map-marker-alt fa-lg mr-3" /> <span>Edison 3, 28006, Madrid</span>
				</p>
			</div>
		</div>

		<div className="col-4 mt-5">
			<MapBox height={220} isGeolocation={false} />
		</div>
	</div>
);
