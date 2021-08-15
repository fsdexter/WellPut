import React, { Component } from "react";
import MyMap from "./mapEngine";
import "../../styles/footer.scss";

export const Footer = () => (
	<footer>
		<div className="row divfooter">
			<div className="col">
				<h4 className="footerTitle">- Made by Genesis</h4>
			</div>
			<div className="col footerAddress">
				<p>
					<i className="fas fa-map-marker-alt" /> Edison 3, 28006, Madrid.
				</p>
				<p>
					<i className="fas fa-at" /> genesisfniv@gmail.com
				</p>
			</div>
			<div className="col-3 mt-1 mb-1 footMap">
				<MyMap center={{ lat: 40.416775, lng: -3.70379 }} style={{ width: "330px", height: "120px" }} />
			</div>
		</div>
	</footer>
);
