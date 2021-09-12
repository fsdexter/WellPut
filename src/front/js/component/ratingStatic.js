import React, { useState } from "react";
import PropTypes from "prop-types";

export const RatingStatic = props => {
	const ratingValue = props.rating;

	if (ratingValue === 0)
		return (
			<div>
				<div className="fa fa-star unchecked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
			</div>
		);
	if (ratingValue === 1)
		return (
			<div>
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
			</div>
		);
	if (ratingValue === 2)
		return (
			<div>
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
			</div>
		);
	if (ratingValue === 3)
		return (
			<div>
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
			</div>
		);
	if (ratingValue === 4)
		return (
			<div>
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star unchecked fa-2x" />
			</div>
		);
	if (ratingValue === 5)
		return (
			<div>
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star checked fa-2x" />
				<div className="fa fa-star checked fa-2x" />
			</div>
		);
};

RatingStatic.propTypes = {
	rating: PropTypes.number
};
