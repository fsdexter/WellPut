import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export function Rating(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex">
			{Array(5)
				.fill(0)
				.map((item, i) => {
					return (
						<div
							key={i}
							className={
								store.rating < i + 1 ? "far fa-star fa-2x unchecked" : "fas fa-star fa-2x checked"
							}
							onClick={() => {
								let s = i + 1;
								if (s == store.rating) {
									s -= 1;
								}
								actions.setRating(s);
							}}></div>
					);
				})}
		</div>
	);
}
