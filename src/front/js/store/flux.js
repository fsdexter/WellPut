// Backend URL
import { API_BASE_URL } from "../constants";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			key: "AIzaSyCzhBMjhiVX2elfehs4kBMElmWfs0d86xY",
			roomList: [],
			favorites: [],
			reviews: [],
			roomies: [],
			users: []
		},
		actions: {
			signUp: async userValues => {
				const store = getStore();

				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(userValues),
					redirect: "follow"
				};

				try {
					const response = await fetch(`${API_BASE_URL}/api/sign_up`, requestOptions);
					if (response.status >= 400) {
						const errorMsg = "Error during the sign up process";
						throw new Error(errorMsg);
					} else {
						const newStore = await response.json();
						setStore({ user: newStore });
						localStorage.setItem("user", JSON.stringify(store.user));
					}
				} catch (error) {
					return error.message;
				}
			},
			login: async userValues => {
				const store = getStore();

				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(userValues),
					redirect: "follow"
				};

				try {
					const response = await fetch(`${API_BASE_URL}/api/login`, requestOptions);

					if (response.status === 401) {
						const errorMsg = await response.json();
						throw new Error(errorMsg);
					} else {
						const newStore = await response.json();
						setStore({ user: newStore });
						localStorage.setItem("user", JSON.stringify(store.user));
					}
				} catch (error) {
					return error.message;
				}
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
			editProfile: async userValues => {
				console.log("SE LLAMÓ A LA FUNCIÓN DE EDITAR PERFIL");

				const store = getStore();

				const requestOptions = {
					method: "PATCH",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(userValues),
					redirect: "follow"
				};

				try {
					const response = await fetch(`${API_BASE_URL}/api/edit_profile/${user_id}`, requestOptions);

					if (response.status >= 400) {
						const errorMsg = "Error during the edition process";
						throw new Error(errorMsg);
					} else {
						const newStore = await response.json();
						setStore({ user: newStore });
						localStorage.setItem("user", JSON.stringify(store.user));

						console.log("USUARIO EDITADO");
					}
				} catch (error) {
					return error.message;
				}
			},
			logOut: () => {
				setStore({ user: null });
				localStorage.clear();
			},
			getUsers: async () => {
				const store = getStore();

				const requestOptions = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				try {
					const response = await fetch(`${API_BASE_URL}/api/users`, requestOptions);

					if (response.status >= 400) {
						const errorMsg = "Error during the get users process";
						throw new Error(errorMsg);
					} else {
						const usersList = await response.json();
						setStore({ users: usersList });
						localStorage.setItem("users", JSON.stringify(store.users));

						console.log("LISTA DE USUARIOS ?? ", usersList);
					}
				} catch (error) {
					return error.message;
				}
			},
			getUser: async () => {
				const store = getStore();

				const requestOptions = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};

				try {
					//const response = await fetch(`${API_BASE_URL}/api/users/${user_id}`, requestOptions);
					const response = await fetch(`${API_BASE_URL}/api/users/1000`, requestOptions);

					if (response.status >= 400) {
						const errorMsg = "Error during the get user process";
						throw new Error(errorMsg);
					} else {
						const user = await response.json();
						setStore({ user: user });
						localStorage.setItem("user", JSON.stringify(store.user));

						console.log(" USUARIO  ?? ", user);
					}
				} catch (error) {
					return error.message;
				}
			},
			recoverPassword: userValues => {
				console.log("métod UPDATE para modificar la contraseña. DATOS NUEVOS : ", userValues);
			},
			addReview: () => {
				console.log("SE AGREGÓ UN NUEVO COMENTARIO A LA HABITACIÓN");
			},
			addRoomie: () => {
				console.log("SE AGREGÓ UN NUEVO COMPAÑERO DE PISO");
			},
			deleteRoomie: () => {
				console.log("SE ELIMINÓ A UN COMPAÑERO DE PISO");
			}
		}
	};
};

export default getState;
