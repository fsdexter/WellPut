// Backend URL. This is in ".env" file
// This is to protect more the connection with the Database
export const API_BASE_URL = process.env.BACKEND_URL;
export const interestsOptions = [
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

export const languageOptions = [
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
