//DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// COMPONENTS
import UserPictureForm from "../components/UserPictureForm"
import UserUpload from "../components/UserUpload"

//API
const API = process.env.REACT_APP_API_URL;


export default function Profile() {

  const [pictures, setPictures] = useState([])
  let { id } = useParams();

  const handleAdd = (newPicture) => {
    axios
      .post(`${API}/users/${id}/picture`, newPicture)
      .then(
        (response) => {
          setPictures([response.data, ...pictures]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
    };
    const handleDelete = (id) => {
        axios
          .delete(`${API}/users/${id}/picture/${id}`)
          .then(
            (res) => {
              const copyPictureArray = [...pictures];
              const indexDeletedPicture = copyPictureArray.findIndex((picture) => {
                return picture.id === id;
              });
              copyPictureArray.splice(indexDeletedPicture, 1);
              setPictures(copyPictureArray);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
        };
        const handleEdit = (updatedPicture) => {
            axios
              .put(`${API}/users/${id}/picture/${updatedPicture.id}`, updatedPicture)
              .then((response) => {
                const copyPictureArray = [...pictures];
                const indexUpdatedPicture = copyPictureArray.findIndex((picture) => {
                  return picture.id === updatedPicture.id;
                });
                copyPictureArray[indexUpdatedPicture] = response.data;
                setPictures(copyPictureArray);
              })
              .catch((c) => console.warn("catch", c));
            };
          useEffect(() => {
            axios.get(`${API}/users/${id}/picture`).then((response) => {
              console.log(response.data);
              setPictures(response.data);
            });
          }, [id, API]);
  return (
    <div>
        <section className="Pictures">
            <h2>Pictures</h2>
            <UserPictureForm handleSubmit={handleAdd}>
                <h3>Add a New Post</h3>
            </UserPictureForm>
            {pictures.map((picture) => (
                <UserUpload 
                key={picture.id} 
                picture={picture} 
                handleDelete={handleDelete}
                handleSubmit={handleEdit}
                />        
            ))}
        </section>
    </div>
  )
}
// CREATE TABLE picture (
//     id SERIAL PRIMARY KEY,
//     receiver_id INT REFERENCES users(id) ON DELETE CASCADE,
//     exchange_id INT REFERENCES exchange(id) ON DELETE CASCADE,
//     pictures_post_title TEXT,
//     pictures_post_blurb TEXT,
//     pictures_post_URL TEXT,
//     likes_count INT DEFAULT 0
//   );





 