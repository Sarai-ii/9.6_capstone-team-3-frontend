import ReviewForm from "./ReviewForm";
import {useState } from "react"

export default function UserUpload({ picture, handleDelete, handleSubmit }) {

    const [viewEditForm, toggleEditForm] = useState(false);

    const toggleView = () => {
        toggleEditForm(!viewEditForm);
    };

    return (
        <div className="Picture">
            {
            viewEditForm ? (
                <div>
                    <button onClick={toggleView}>See this Post</button>
                    <UserPictureForm   
                        pictureDetails={picture}
                        toggleView={toggleView}
                        handleSubmit={handleSubmit}
                    />
                </div>
                ) : (
                <div>
                    <button onClick={toggleView}>Edit this Post</button>
                    <h4>
                    {picture.pictures_post_title} <span>{picture.likes_count}</span>
                    </h4>
                    <p>{picture.pictures_post_blurb}</p>
                </div>
            )
            }
            <button onClick={() => handleDelete(picture.id)}>Delete</button>
        </div>
    );
}