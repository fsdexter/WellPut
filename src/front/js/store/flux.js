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
			money: {},
			interests: [],
			tenanciesRoom: [],
			room: {},
			review: {},
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
					const response = await fetch(`${API_BASE_URL}/api/rooms`);
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

				try {
					const response = await fetch(`${API_BASE_URL}/api/profile/${user_id}`);
					const user = await response.json();
					setStore({ user: user });
					localStorage.setItem("user", JSON.stringify(store.user));
				} catch (error) {
					return error.message;
				}
			},

			getOwner: async user_id => {
				const store = getStore();

				try {
					const response = await fetch(`${API_BASE_URL}/api/profile/${user_id}`);
					const owner = await response.json();
					setStore({ owner: owner });
					localStorage.setItem("owner", JSON.stringify(store.owner));
				} catch (error) {
					return error.message;
				}
			},

			/////////////////////////////////////////edit user
			editProfile: async (userValues, user_id) => {
				try {
					const store = getStore();

					const requestOptions = {
						method: "PATCH",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(userValues),
						redirect: "follow"
					};

					const response = await fetch(`${API_BASE_URL}/api/edit_profile/${user_id}`, requestOptions);

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
				setStore({ rating: s });
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
				setStore({ money: e });
			},
			setCity: c => {
				const store = getStore();
				setStore({ city: c });
			},
			setInterests: i => {
				const store = getStore();
				setStore({ interests: i });
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
						money: store.money,
						country: "Spain",
						interests: store.interests
					})
				})
					.then(res => res.json())
					.then(data => console.log(data, "response serach_room"));
			},
			//////////////////////////////////////////
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
			///////////////////////////////////get Tenancy
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
			/////////////////////AÑADIR REVIEW /////////////////////////////////////
			addReview: async formValue => {
				console.log("pasa los datos pero no entra al if", formValue);
				const store = getStore();
				formValue["user"] = JSON.parse(localStorage.getItem("user"))["user"]["id"];
				formValue["room_id"] = JSON.parse(localStorage.getItem("room")).id;
				const postreview = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formValue),
					redirect: "follow"
				};
				try {
					const response = await fetch(`${API_BASE_URL}/api/tenancy_room_reviews`, postreview);
					console.log("entro a try", formValue);
					if (response.status >= 300) {
						const errorMsg = "Error saving comment";
						throw new Error(errorMsg);
					} else {
						const newStore = await response.json();
						setStore({ review: newStore }); ///aqui lo paso pero no guarda
						localStorage.setItem("review", JSON.stringify(store.review));
						alert("thank you for your comment");
					}
				} catch (errorMsg) {
					return errorMsg.message;
				}
			},

			// .then(res => res.json())
			// .then(data => console.log(data, "response addReview"));

			//////////////////////////////////////////////////////////º

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
