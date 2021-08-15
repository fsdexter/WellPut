import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const languageOptions = [
	{ value: "Spanish", label: "Spanish" },
	{ value: "English", label: "English" },
	{ value: "Chinese", label: "Chinese" },
	{ value: "Hindi", label: "Hindi" },
	{ value: "French", label: "French" },
	{ value: "Arab", label: "Arab" },
	{ value: "Russian", label: "Russian" },
	{ value: "Portuguese", label: "Portuguese" },
	{ value: "Bengali", label: "Bengali" },
	{ value: "German", label: "German" }
];
const animatedComponents = makeAnimated();

export function Language() {
	return (
		<Select
			closeMenuOnSelect={false}
			components={animatedComponents}
			isMulti
			options={languageOptions}
			className="fontColor"
		/>
	);
}
