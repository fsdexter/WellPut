import React, { useContext , useState} from "react";
//aun no se complemenntara
export const EditProfile = () => {
    const [files, setFiles] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);

    const uploadImage = evt => {
        evt.preventDefault();
        // we are about to send this to the backend.
        console.log("This are the files", files);
        let body = new FormData();
        body.append("profile_image", files[0]);
        const options = {
            body,
            method: "POST"
        };
        // you need to have the user_id in the localStorage
        const currentUserId = localStorage.getItem("user_id");
        fetch(`${process.env.BACKEND_URL}/user/${currentUserId}/image`, options)
            .then(resp => resp.json())
            .then(data => console.log("Success!!!!", data))
            .catch(erros => console.error("ERRORRRRRR!!!", error));
    };
return(
<div className="jumbotron">
        <form onSubmit={uploadImage}>
            <input type="file" onChange={e => setFiles(e.target.files)} />
            <button>Upload</button>
        </form>
    </div>
};