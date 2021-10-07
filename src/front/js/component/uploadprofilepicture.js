import React, { useState } from "react";

// Backend URL
import { API_BASE_URL } from "../constants";
import perfil from "../../img/fotodeperfil.png";

export const UserProfileForm = () => {
	const [files, setFiles] = useState(null);
	const [avatar_url, setAvatarUrl] = useState(null);

	const uploadImage = () => {
		//evt.preventDefault();

		// we are about to send this to the backend.
		let body = new FormData();
		body.append("avatar_url", files[0]);
		const options = {
			body,
			method: "POST"
		};
		const currentUserId =
			JSON.parse(localStorage.getItem("user")).user?.id || JSON.parse(localStorage.getItem("user")).id;

		fetch(`${API_BASE_URL}/api/user/${currentUserId}/image`, options)
			.then(resp => resp.json())
			.then(data => {
				alert("Imagen cargada con exito");
				setAvatarUrl(data.avatar_url);

				//history.push(`/edit_profile/${JSON.parse(localStorage.getItem("user")).user.id}`);
			})
			.catch(error => console.error("ERRORRRRRR!!!", error));
	};
	return (
		<div className="d-flex flex-column">
			<img src={perfil} className="card-img-top roundShape imgperfil" alt="Card image cap" />
			{avatar_url && <h2>You Have {unreadMessages.length} unread Messages .</h2>}
			<input type="file" onChange={e => setFiles(e.target.files)} />
			<button className="btn btn-warning mt-3" onClick={() => uploadImage()}>
				Upload
			</button>
		</div>
	);
};
