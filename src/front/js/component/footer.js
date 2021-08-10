import React, { Component } from "react";
import faceb from "../../img/facebook.png";
import MyMap from "./mapEngine";
import instagram from "../../img/instagram.png";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="row m-auto justify-content-center d-flex divfooter">
			<div className="row m-auto justify-content-center d-flex ">
				<img className="card-img-top roundShape" src={faceb} />
			</div>
			<div className="row m-auto justify-content-center d-flex ">
				<img className="card-img-top roundShape" src={instagram} alt="Card image cap" />
			</div>
			<div className="row m-auto justify-content-center d-flex">
				<tr>
					<h6>
						<th> About us</th> <th>Contact us</th> <th>Cl. Edison, 3, 28006 Madrid</th>
					</h6>
				</tr>
			</div>
			<div>
				<MyMap center={{ lat: 40.416775, lng: -3.70379 }} style={{ width: "330px", height: "120px" }} />
			</div>
		</div>
	</footer>
);
