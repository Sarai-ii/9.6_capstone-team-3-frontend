// FirebaseImageUpload.js

import React, { useEffect, useState } from 'react'
import { storage, imageDb } from './firebaseConfig';
import { v4 } from "uuid";
import { getDownloadURL, listAll, uploadBytes, ref } from '@firebase/storage';

function FirebaseImageUpload() {
    const [ img, setImg ] = useState(null);
    const [imgURL, setImgURL] = useState([]);

    const handleClick = () => {
        if(img !== null){
            const imgRef = ref(imageDb, `files/${v4()}`)
            uploadBytes(imgRef, img).then(value => {
                console.log(value);
                getDownloadURL(value.ref).then(URL => {
                    setImgURL((data) => [...data, URL]);
                });
            });
        }
    };
    useEffect(() => {
        listAll(ref(imageDb,"files"))
            .then(imgs=>{
                console.log(imgs)
                imgs.items.forEach(val=> {
                    getDownloadURL(val).then(url=>{
                        setImgURL(data=>[...data, url])
                    })
                })
            })
    }, [] )
    console.log(imgURL,"imgURL")

  return (
    <div>
        FirebaseImageUpload
        <input type="file" onChange={(event) => setImg(event.target.files[0])} />
        <button onClick = { handleClick }>Upload</button>
        <br/>
        {
            imgURL.map(dataVal=> <div>
                <img src={dataVal} height="200px" width="200px" />
                </div>)
        }
    </div>
  )
}

export default FirebaseImageUpload