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
			myLocalStore: {},
			owner: {},
			roomsSearch: []
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
						localStorage.setItem("user", JSON.stringify(newStore.user));
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
			getOwner: async owner_id => {
				const store = getStore();

				try {
					const response = await fetch(`${API_BASE_URL}/api/owner-profile/${owner_id}`);
					const owner = await response.json();
					setStore({ owner: owner });
					localStorage.setItem("owner", JSON.stringify(store.owner));
				} catch (error) {
					return error.message;
				}
			},
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
					}
				} catch (error) {
					return error.message;
				}
			},
			recoverPassword: userValues => {
				//console.log("métod UPDATE para modificar la contraseña. DATOS NUEVOS : ", userValues);
			},
			addRoomie: (user, roomId) => {
				fetch(API_BASE_URL + "/api/applyroom", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						user: user,
						room_Id: roomId
					})
				})
					.then(res => res.json())
					//.then(data => console.log(data, "Apply Romie"));
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
				setStore({ rating: s });
			},

			setBedType: b => {
				setStore({ bedType: b });
			},
			setMoney: e => {
				setStore({ money: e });
			},
			setCity: c => {
				setStore({ city: c });
			},
			setInterests: i => {
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
						filters: store.filters,
						bedType: store.bedType,
						city: store.city,
						money: store.money,
						country: "Spain"
					})
				})
					.then(res => res.json())
					.then(data => {
						setStore({ roomsSearch: data });
					});
			},
			postNewAnnouncement: room => {
				fetch(API_BASE_URL + "/api/new_announcement", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(room)
				})
					.then(res => res.json())
					//.then(data => console.log(data, "response postNewAnnouncement"));
			},
			getTenancies: async room_id => {
				try {
					const response = await fetch(`${API_BASE_URL}/api/tenancy_room_reviews/${room_id}`);
					const tenanciesRoom = await response.json();

					setStore({ tenanciesRoom: tenanciesRoom });
					localStorage.setItem("tenanciesRoom", JSON.stringify(tenanciesRoom));
				} catch (error) {
					return error.message;
				}
			},
			/////////////////////AÑADIR REVIEW /////////////////////////////////////
			addReview: async formValue => {
				const store = getStore();
				formValue["room_id"] = JSON.parse(localStorage.getItem("details")).id;
				formValue["user"] = JSON.parse(localStorage.getItem("user")).id;
				formValue["rating"] = store.rating;
				const postreview = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(formValue),
					redirect: "follow"
				};
				try {
					const response = await fetch(`${API_BASE_URL}/api/tenancy_room_reviews`, postreview);
					if (response.status >= 300) {
						const errorMsg = "Error saving comment";
						alert("You cannot write a comment for this room!");
					} else {
						const newStore = await response.json();
						setStore({ review: newStore });
						localStorage.setItem("review", JSON.stringify(store.review));
						alert("Thank you for your comment");
					}
				} catch (errorMsg) {
					return errorMsg.message;
				}
			},
			setRoomActive: id => {
				fetch(API_BASE_URL + "/api/change_active_room/" + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(res => {
					if (res.ok) {
						getActions().getRooms();
					}
				});
			},
			setRoomDelete: id => {
				fetch(API_BASE_URL + "/api/change_delete_room/" + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(res => {
					if (res.ok) {
						getActions().getRooms();
					}
				});
			},
			getDetailsRoom: async room_id => {
				const store = getStore();

				try {
					const response = await fetch(`${API_BASE_URL}/api/detailed_room/${room_id}`);
					const room = await response.json();
					setStore({ room: room });
				} catch (error) {
					return error.message;
				}
			},
			setFavorites: (id_user, id_room) => {
				fetch(API_BASE_URL + "/api/change_favorite/" + id_user + "/" + id_room, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(res => {});
			}
		}
	};
};

export default getState;
