import React, { useState } from "react";

export function Rating() {
	const [switchColor, setSwitchColor] = useState("unchecked");
	const [switchColor2, setSwitchColor2] = useState("unchecked");
	const [switchColor3, setSwitchColor3] = useState("unchecked");
	const [switchColor4, setSwitchColor4] = useState("unchecked");
	const [switchColor5, setSwitchColor5] = useState("unchecked");

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
				className={"fa fa-star fa-2x " + switchColor}
			/>
			<div
				onClick={() => {
					if (switchColor === "unchecked") {
						setSwitchColor("checked");
					}
					if (switchColor2 === "unchecked") {
						setSwitchColor2("checked");
					} else if (switchColor2 === "checked") {
						setSwitchColor2("unchecked");
					}
				}}
				className={"fa fa-star fa-2x " + switchColor2}
			/>
			<div
				onClick={() => {
					if (switchColor === "unchecked") {
						setSwitchColor("checked");
					}
					if (switchColor2 === "unchecked") {
						setSwitchColor2("checked");
					}
					if (switchColor3 === "unchecked") {
						setSwitchColor3("checked");
					} else if (switchColor3 === "checked") {
						setSwitchColor3("unchecked");
					}
				}}
				className={"fa fa-star fa-2x " + switchColor3}
			/>
			<div
				onClick={() => {
					if (switchColor === "unchecked") {
						setSwitchColor("checked");
					}
					if (switchColor2 === "unchecked") {
						setSwitchColor2("checked");
					}
					if (switchColor3 === "unchecked") {
						setSwitchColor3("checked");
					}
					if (switchColor4 === "unchecked") {
						setSwitchColor4("checked");
					} else if (switchColor4 === "checked") {
						setSwitchColor4("unchecked");
					}
				}}
				className={"fa fa-star fa-2x " + switchColor4}
			/>
			<div
				onClick={() => {
					if (switchColor === "unchecked") {
						setSwitchColor("checked");
					}
					if (switchColor2 === "unchecked") {
						setSwitchColor2("checked");
					}
					if (switchColor3 === "unchecked") {
						setSwitchColor3("checked");
					}
					if (switchColor4 === "unchecked") {
						setSwitchColor4("checked");
					}
					if (switchColor5 === "unchecked") {
						setSwitchColor5("checked");
					} else if (switchColor5 === "checked") {
						setSwitchColor5("unchecked");
					}
				}}
				className={"fa fa-star fa-2x " + switchColor5}
			/>
		</div>
	);
}
