import React, { useState } from "react";
export function Counter() {
	const [count, setCount] = useState(1);
	if (count < 1) {
		setCount(1);
	}
	return (
		<div className="d-flex">
			<button className="mr-2 btn btn-default btn-circle" onClick={() => setCount(count - 1)}>
				<i className="fas fa-minus" />
			</button>{" "}
			<h5>{count}</h5>
			<button className="ml-2 btn btn-default btn-circle" onClick={() => setCount(count + 1)}>
				<i className="fas fa-plus" />
			</button>{" "}
		</div>
	);
}
