import React, { useState } from "react";

export function Rating() {
	const [switchColor, setSwitchColor] = useState("unchecked");

	return (
		<div>
			<div
				onClick={() => {
					if (switchColor === "unchecked") {
						setSwitchColor("checked");
					} else if (switchColor === "checked") {
						setSwitchColor("unchecked");
					}
				}}
				className={"fa fa-star " + switchColor}
			/>
		</div>
	);
}
