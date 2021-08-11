import React from "react";
import "../../styles/announcements.scss";
import openEye from "../../img/openEye.png";

export const MyRoomsItemActive = () => {
	return (
		<div className="row">
			<div className="third_part mx-auto mt-3 mb-2">
				<div className="row">
					<div className="col-6">9 aaaaaaa</div>
					<div className="col-4 roomItemBar">2 aaaaaaa</div>
					<div className="col-2">
						<div className="eyeButton">
							<button type="button" className="btn btn-outline-dark">
								<img src={openEye} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export const MyRoomsItemInactive = () => {
	return (
		<div className="row">
			<div className="third_part mx-auto mt-3 mb-2">
				<div className="row">
					<div className="col-9">9 iiiiiiiiiii</div>
					<div className="col-2 roomItemBar">2 iiiiiii</div>
					<div className="col-1">1 iiii</div>
				</div>
			</div>
		</div>
	);
};
export const MyRoomsItemOccupied = () => {
	return (
		<div className="row">
			<div className="third_part mx-auto mt-3 mb-2">
				<div className="row">
					<div className="col-9">9 ooooo</div>
					<div className="col-2 roomItemBar">2ooooo</div>
					<div className="col-1">1ooo</div>
				</div>
			</div>
		</div>
	);
};
