import React from "react";
import "../../styles/announcements.scss";

export const MyRoomsItemActive = () => {
	return (
		<div className="row">
			<div className="third_part mx-auto mt-3 mb-2">
				<div className="row">
					<div className="col-10">10 aaaaaaa</div>
					<div className="col-2">2 aaaaaaa</div>
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
					<div className="col-10">10 iiiiiii</div>
					<div className="col-2">2 iiiiiiii</div>
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
					<div className="col-10">10 oooooooooo</div>
					<div className="col-2">2 oooooooo</div>
				</div>
			</div>
		</div>
	);
};
