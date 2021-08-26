import React, { useState } from "react";

export function Rating() {
	const [stars, setStars] = useState(0);

	return (
		<div className="d-flex">
			{Array(5)
				.fill(0)
				.map((item, i) => {
					return (
						<div
							key={i}
							className={stars < i + 1 ? "far fa-star fa-2x" : "fas fa-star fa-2x"}
							onClick={() => {
								let s = i + 1;
								if (s == stars) {
									s -= 1;
								}
								setStars(s);
							}}></div>
					);
				})}
		</div>
	);
}

// export function Rating() {
// 	const [switchColor, setSwitchColor] = useState("unchecked");
// 	const [switchColor2, setSwitchColor2] = useState("unchecked");
// 	const [switchColor3, setSwitchColor3] = useState("unchecked");
// 	const [switchColor4, setSwitchColor4] = useState("unchecked");
// 	const [switchColor5, setSwitchColor5] = useState("unchecked");

// 	return (
// 		<div>
// 			<div
// 				onClick={() => {
// 					if (switchColor === "unchecked") {
// 						setSwitchColor("checked");
// 					}
// 					if (switchColor === "checked") {
// 						setSwitchColor("unchecked");
// 					}
// 					if (switchColor === "checked") {
// 						setSwitchColor2("unchecked");
// 					}
// 					if (switchColor === "checked") {
// 						setSwitchColor3("unchecked");
// 					}
// 					if (switchColor === "checked") {
// 						setSwitchColor4("unchecked");
// 					}
// 					if (switchColor === "checked") {
// 						setSwitchColor5("unchecked");
// 					}
// 				}}
// 				className={"fa fa-star fa-2x " + switchColor}
// 			/>
// 			<div
// 				onClick={() => {
// 					if (switchColor === "unchecked") {
// 						setSwitchColor("checked");
// 					}
// 					if (switchColor2 === "unchecked") {
// 						setSwitchColor2("checked");
// 					}
// 					if (switchColor2 === "checked") {
// 						setSwitchColor2("unchecked");
// 					}
// 					if (switchColor2 === "checked") {
// 						setSwitchColor3("unchecked");
// 					}
// 					if (switchColor2 === "checked") {
// 						setSwitchColor4("unchecked");
// 					}
// 					if (switchColor2 === "checked") {
// 						setSwitchColor5("unchecked");
// 					}
// 				}}
// 				className={"fa fa-star fa-2x " + switchColor2}
// 			/>
// 			<div
// 				onClick={() => {
// 					if (switchColor === "unchecked") {
// 						setSwitchColor("checked");
// 					}
// 					if (switchColor2 === "unchecked") {
// 						setSwitchColor2("checked");
// 					}
// 					if (switchColor3 === "unchecked") {
// 						setSwitchColor3("checked");
// 					}
// 					if (switchColor3 === "checked") {
// 						setSwitchColor3("unchecked");
// 					}
// 					if (switchColor3 === "checked") {
// 						setSwitchColor4("unchecked");
// 					}
// 					if (switchColor3 === "checked") {
// 						setSwitchColor5("unchecked");
// 					}
// 				}}
// 				className={"fa fa-star fa-2x " + switchColor3}
// 			/>
// 			<div
// 				onClick={() => {
// 					if (switchColor === "unchecked") {
// 						setSwitchColor("checked");
// 					}
// 					if (switchColor2 === "unchecked") {
// 						setSwitchColor2("checked");
// 					}
// 					if (switchColor3 === "unchecked") {
// 						setSwitchColor3("checked");
// 					}
// 					if (switchColor4 === "unchecked") {
// 						setSwitchColor4("checked");
// 					}
// 					if (switchColor4 === "checked") {
// 						setSwitchColor4("unchecked");
// 					}
// 					if (switchColor4 === "checked") {
// 						setSwitchColor5("unchecked");
// 					}
// 				}}
// 				className={"fa fa-star fa-2x " + switchColor4}
// 			/>
// 			<div
// 				onClick={() => {
// 					if (switchColor === "unchecked") {
// 						setSwitchColor("checked");
// 					}
// 					if (switchColor2 === "unchecked") {
// 						setSwitchColor2("checked");
// 					}
// 					if (switchColor3 === "unchecked") {
// 						setSwitchColor3("checked");
// 					}
// 					if (switchColor4 === "unchecked") {
// 						setSwitchColor4("checked");
// 					}
// 					if (switchColor5 === "unchecked") {
// 						setSwitchColor5("checked");
// 					}
// 					if (switchColor5 === "checked") {
// 						setSwitchColor5("unchecked");
// 					}
// 				}}
// 				className={"fa fa-star fa-2x " + switchColor5}
// 			/>
// 		</div>
// 	);
// }
