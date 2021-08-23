import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const interestsOptions = [
	{ value: "Sporty", label: "Sporty" },
	{ value: "Dancer", label: "Dancer" },
	{ value: "Vegan", label: "Vegan" },
	{ value: "Sociable", label: "Sociable" },
	{ value: "Musician", label: "Musician" },
	{ value: "Reader", label: "Reader" },
	{ value: "Vegetarian", label: "Vegetarian" },
	{ value: "Animal Lover", label: "Animal Lover" },
	{ value: "Movies", label: "Movies" },
	{ value: "Traveler", label: "Traveler" },
	{ value: "Partying", label: "Partying" },
	{ value: "Gay Friendly", label: "Gay Friendly" }
];

export function AnimatedMulti(selectOptions) {
	return (
		<Select
			closeMenuOnSelect={false}
			components={animatedComponents}
			isMulti
			options={selectOptions.options}
			className="fontColor"
			onChange={e => selectOptions.change(e)}
		/>
	);
}
