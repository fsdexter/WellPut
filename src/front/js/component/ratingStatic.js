import React, { useState } from "react";

const ratingValue = 2;

export const RatingStatic = () => {
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
