import React, { useContext, useState } from "react";

export const UserProfileForm = () => {
	const [files, setFiles] = useState(null);
	const [avatar_url, setAvatarUrl] = useState(null);
	const { store, actions } = useContext(Context);

	const uploadImage = evt => {
		evt.preventDefault();
		// we are about to send this to the backend.
		console.log("This are the files", files);
		let body = new FormData();
		body.append("avatar_url", files[0]);
		const options = {
			body,
			method: "POST"
		};
		// you need to have the user_id in the localStorage
		const currentUserId = JSON.parse(localStorage.getItem("user"))["user"]["id"];
		console.log(currentUserId, "<---------------");
		fetch(`${process.env.BACKEND_URL}/user/${currentUserId}/image`, options)
			.then(resp => resp.json())
			.then(data => {
				alert("Imagen cargada con exito");
				setAvatarUrl(data.avatar_url);
			})
			.catch(error => console.error("ERRORRRRRR!!!", error));
	};
	return (
		<div className="jumbotron">
			<form onSubmit={uploadImage}>
				{avatar_url && <h2>You Have {unreadMessages.length} unread Messages .</h2>}
				<input type="file" onChange={e => setFiles(e.target.files)} />
				<button>Upload</button>
			</form>
		</div>
	);
};
