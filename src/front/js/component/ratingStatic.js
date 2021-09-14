import React, { useState } from "react";
import PropTypes from "prop-types";

export const RatingStatic = props => {
	const ratingValue = props.rating;

	switch (ratingValue) {
		case 0:
			return (
				<div>
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
				</div>
			);
		case 1:
			return (
				<div>
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
				</div>
			);
		case 2:
			return (
				<div>
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
				</div>
			);
		case 3:
			return (
				<div>
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
				</div>
			);
		case 4:
			return (
				<div>
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
				</div>
			);
		case 5:
			return (
				<div>
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star checked fa-2x" />
					<div className="fa fa-star checked fa-2x" />
				</div>
			);
		default:
			return (
				<div>
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
					<div className="fa fa-star unchecked fa-2x" />
				</div>
			);
	}
};

RatingStatic.propTypes = {
	rating: PropTypes.number
};
