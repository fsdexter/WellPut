// Backend URL
import { API_BASE_URL } from "../constants";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null
		},
		actions: {
			signUp: userValues => {
				const store = getStore();
				let newStore;
				let localStoreUser;
				const raw = JSON.stringify(userValues);

				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: raw,
					redirect: "follow"
				};

				fetch(`${API_BASE_URL}/api/sign_up`, requestOptions)
					.then(response => response.json())
					.then(data => {
						newStore = data;
						console.log("USARIO REGISTRADO : ", newStore);
						setStore({ user: newStore });
						localStoreUser = localStorage.setItem("user", JSON.stringify(store.user));
					})
					.catch(error => console.log("error", error));
			},
			login: userValues => {
				const store = getStore();
				let newStore;
				let localStoreUser;

				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(userValues),
					redirect: "follow"
				};

				fetch(`${API_BASE_URL}/api/login`, requestOptions)
					.then(response => response.json())
					.then(data => {
						newStore = data;
						setStore({ user: newStore });
						console.log("USARIO LOGUEADO : ", newStore);
						localStoreUser = localStorage.setItem("user", JSON.stringify(store.user));
					})
					.catch(error => console.log("error", error));
			},
			// to check that the user is login
			isUserAuthentificted: () => {
				const store = getStore();
				return store.user != null;
			},
			getUserAuthentificted: () => {
				let logedUser = JSON.parse(localStorage.getItem("user"));
				if (logedUser) {
					// Fill in the store with the information of the localStorage
					setStore({ user: logedUser });
				}
			},
			logOut: () => {
				const store = getStore();
				store.user = null;
				localStorage.clear();
			}
		}
	};
};

export default getState;
