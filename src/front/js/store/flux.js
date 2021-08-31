// Backend URL
import { API_BASE_URL } from "../constants";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: null,
			key: "AIzaSyCzhBMjhiVX2elfehs4kBMElmWfs0d86xY",
			rooms: [],
			favorites: [],
			roomies: [],
			filters: [],
			rating: [],
			bedType: [],
			city: [],
			money: [],
			tenanciesRoom: [],
			room: {},
			myLocalStore: {}
		},
		actions: {
			getLocalStore: () => {
				const keys = Object.keys(localStorage);
				const tmpStore = {};

				keys.forEach(paramName => {
					// "loglevel:webpack-dev-server" es una propiedad del LocalStorage, si se deja, revienta todo
					if (paramName !== "loglevel:webpack-dev-server") {
						const paramValue = JSON.parse(localStorage.getItem(paramName));
						tmpStore[paramName] = paramValue;

						if (paramValue) {
							setStore({ myLocalStore: tmpStore });
						}
					}
				});
			},
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
			logOut: () => {
				setStore({ user: null, myLocalStore: {} });
				localStorage.clear();
			},
			getRooms: async () => {
				const store = getStore();

				try {
					const response = await fetch(`${API_BASE_URL}/api/`);
					const roomsList = await response.json();
					setStore({ rooms: roomsList });
					localStorage.setItem("rooms", JSON.stringify(store.rooms));
				} catch (error) {
					return error.message;
				}
			},

			////////////////////////getuser
			getUser: async user_id => {
				const store = getStore();
				console.log(user_id);
				try {
					const response = await fetch(`${API_BASE_URL}/api/profile/${user_id}`);
					const user = await response.json();
					setStore({ user: user });
					localStorage.setItem("user", JSON.stringify(store.user));
				} catch (error) {
					return error.message;
				}
			},

			/////////////////////////////////////////edit user
			editProfile: async (userValues, user_id) => {
				console.log("userValues - ", userValues, "user_id --- ", user_id);
				try {
					const store = getStore();

					const requestOptions = {
						method: "PATCH",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(userValues),
						redirect: "follow"
					};

					const response = await fetch(`${API_BASE_URL}/api/edit_profile/${user_id}`, requestOptions);

					console.log("holaaaaaaaaaa -- ", response);

					if (response.status >= 400) {
						const errorMsg = "Error during the edition process";
						throw new Error(errorMsg);
					} else {
						const newStore = await response.json();
						setStore({ user: newStore });
						localStorage.setItem("user", JSON.stringify(store.user));

						console.log("USUARIO EDITADO ---- ", user);
					}
				} catch (error) {
					return error.message;
				}
			},
			recoverPassword: userValues => {
				console.log("métod UPDATE para modificar la contraseña. DATOS NUEVOS : ", userValues);
			},
			addRoomie: () => {
				console.log("SE AGREGÓ UN NUEVO COMPAÑERO DE PISO");
			},
			deleteRoomie: () => {
				console.log("SE ELIMINÓ A UN COMPAÑERO DE PISO");
			},
			onClickHandeler: e => {
				const store = getStore();
				const checker = value => ![e.target.name].some(element => value.includes(element));

				if (store.filters.length > 0) {
					if (store.filters.includes(e.target.name)) {
						setStore({ filters: store.filters.filter(checker) });
					} else {
						setStore({ filters: [...store.filters, e.target.name] });
					}
				} else {
					setStore({ filters: [e.target.name] });
				}
			},
			setRating: s => {
				const store = getStore();
				setStore({ rating: [s] });
			},
			setRoomies: r => {
				const store = getStore();
				setStore({ roomies: r });
			},
			setBedType: b => {
				const store = getStore();
				setStore({ bedType: b });
			},
			setMoney: e => {
				const store = getStore();
				setStore({ ...store.money, [e.target.name]: e.target.value });
			},
			searchRoom: () => {
				const store = getStore();
				fetch(API_BASE_URL + "/api/search_room", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						roomies: store.roomies,
						filters: store.filters,
						rating: store.rating,
						bedType: store.bedType,
						city: store.city,
						money: store.money
					})
				})
					.then(res => res.json())
					.then(data => console.log(data, "response serach_room"));
			},
			postNewAnnouncement: room => {
				console.log(room);
				fetch(API_BASE_URL + "/api/new_announcement", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(room)
				})
					.then(res => res.json())
					.then(data => console.log(data, "response postNewAnnouncement"));
			},
			getTenancies: async room_id => {
				const store = getStore();

				try {
					const response = await fetch(`${API_BASE_URL}/api/tenancy_room_reviews/${room_id}`);
					const tenanciesRoom = await response.json();

					setStore({ tenanciesRoom: tenanciesRoom });
					localStorage.setItem("tenanciesRoom", JSON.stringify(store.tenanciesRoom));
				} catch (error) {
					return error.message;
				}
			},
			addReview: () => {
				console.log("SE AGREGÓ UN NUEVO COMENTARIO A LA HABITACIÓN");
			},
			getDetailsRoom: async room_id => {
				const store = getStore();

				try {
					const response = await fetch(`${API_BASE_URL}/api/detailed_room/${room_id}`);
					const room = await response.json();

					setStore({ room: room });
					localStorage.setItem("room", JSON.stringify(store.room));
				} catch (error) {
					return error.message;
				}
			}
		}
	};
};

export default getState;
