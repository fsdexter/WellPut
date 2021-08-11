import React from "react";
import "../../styles/announcements.scss";
import openEye from "../../img/openEye.png";
import closeEye from "../../img/closeEye.png";
import deleteRoom from "../../img/deleteRoom.png";
import room from "../../img/room.jpg";

const exampleTitle = "Habitación luminosa frente a Sagrada Familia";
const exampleDescription =
	"Habitación amueblada y con mucha luz (da al exterior, a un patio abierto), en un piso grande, nuevo y amueblado. Tenemos un balcón grande con sofá que da al parque y el baño es a compartir entre 2 personas.";
export const MyRoomsItemActive = () => {
	return (
		<div className="row">
			<div className="third_part mx-auto mt-3 mb-2">
				<div className="row">
					<div className="col-6">
						<h5 className="ml-2 mt-2">
							<ins>{exampleTitle}</ins>
						</h5>
						<p className="ml-2">{exampleDescription}</p>
					</div>
					<div className="col-4 roomItemBar">
						<a href="#">
							{" "}
							<img className="roomItemPic" src={room} href="#" />{" "}
						</a>
					</div>
					<div className="col-2">
						<div className="roomItemsButton">
							<button
								type="button"
								className="btn btn-outline-warning roomsButtons"
								alt="click to set room inactive">
								<img src={closeEye} className="closedEye" />
							</button>

							<button type="button" className="btn btn-outline-warning mt-5 roomsButtons">
								<img src={deleteRoom} />
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
					<div className="col-6">
						<h5 className="ml-2 mt-2">
							<ins>{exampleTitle}</ins>
						</h5>
						<p className="ml-2">{exampleDescription}</p>
					</div>
					<div className="col-4 roomItemBar">
						<a href="#">
							{" "}
							<img className="roomItemPic" src={room} href="#" />{" "}
						</a>
					</div>
					<div className="col-2">
						<div className="roomItemsButton">
							<button
								type="button"
								className="btn btn-outline-warning roomsButtons"
								alt="click to set room active">
								<img src={openEye} />
							</button>

							<button type="button" className="btn btn-outline-warning mt-5 roomsButtons">
								<img src={deleteRoom} />
							</button>
						</div>
					</div>
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
					<div className="col-6">
						<h5 className="ml-2 mt-2">
							<ins>{exampleTitle}</ins>
						</h5>
						<p className="ml-2">{exampleDescription}</p>
					</div>
					<div className="col-4 roomItemBar">
						<a href="#">
							{" "}
							<img className="roomItemPic" src={room} href="#" />{" "}
						</a>
					</div>
					<div className="col-2">
						<div className="roomItemsButton">
							<button
								type="button"
								className="btn btn-outline-warning roomsButtons mb-2"
								alt="click to set room active">
								<img src={openEye} />
							</button>
							<br />
							<button
								type="button"
								className="btn btn-outline-warning roomsButtons"
								alt="click to set room inactive">
								<img src={closeEye} className="closedEye" />
							</button>
							<button type="button" className="btn btn-outline-warning roomsButtons mt-2">
								<img src={deleteRoom} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
