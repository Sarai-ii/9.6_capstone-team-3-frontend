import React, { useState } from "react";
import { storageRef } from "../firebaseStorage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";

import "../css/Upload.css";

//Modal.setAppElement('#root'); //this is so accessibility readers can read the modal

const UploadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null); 
  const [title, setTitle] = useState("");
  const [blurb, setBlurb] = useState("");
  const [altText, setAltText] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const MAX_FILE_SIZE_MB = 5; // Maximum file size in MB
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setTitle("");
    setBlurb("");
    setFileUrl(null);  //reset thumbnail preview
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      alert(
        `File size exceeds the maximum limit of ${MAX_FILE_SIZE_MB} MB. Please choose a smaller file.`
      );
      return;
    }

    setSelectedFile(file);

    // Read and display a thumbnail preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setFileUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAltTextChange = (event) => {
    setAltText(event.target.value);
  };
  
  const handleUpload = async () => {
    if (!selectedFile) {
      console.log("Please choose a file to upload.");
      return;
    }

    setIsUploading(true);

    try {
      const fileName = `${Date.now()}_${selectedFile.name}`;
      const fileRef = ref(storageRef, fileName);

      // Upload the file
      const snapshot = await uploadBytes(fileRef, selectedFile);

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(fileRef);

      console.log("File uploaded successfully:", snapshot);
      console.log("Download URL:", downloadURL);

      // Now you can use the downloadURL to make a POST request to your backend
      const picturePostData = {
        pictures_post_title: title, //this is a required field and should not have a default value
        pictures_post_blurb: blurb, //this is a required field and should not have a default value
        pictures_post_URL: downloadURL,
        alt_text: altText || "No alt text provided",
        likes_count: 0,
      };

      //POST request to the backend
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/pictures`,
        picturePostData
      );

      if (response.data && response.data.success) {
        console.log("Upload success!", response.data);
      } else {
        console.error("Upload failed. Server response:", response.data);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      console.log("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
      closeModal();
    }
  };

  return (
    <div>
      <button id="upload-gift-button" onClick={openModal}>
        Upload Picture of Gift
      </button>
      {isOpen && (
        <div className="upload-modal-container">
          <div className="upload-modal-content">
            <span
              id="upload-close-container"
              className="upload-modal-close"
              onClick={closeModal}
            >
              &times;
            </span>
            <div id="upload-modal-header">
              <h2 className="upload-modal-title">Show everyone what you got!</h2>
            </div>
            <div id="upload-modal-subheader">
              {/* <h3 id="upload-modal-h3">
                Share the experience of Happiness Exchange
              </h3> */}
            </div>
            <div id="upload-form-container">
              <div className="upload-input-container">
                <label>Title*</label>
                <input
                  type="text"
                  id="picture-title"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="upload-input-container">
                <label>Thoughts on your gift*</label>
                <textarea
                  id="picture-description"
                  value={blurb}
                  onChange={(e) => setBlurb(e.target.value)}
                ></textarea>
                <input
                  id="upload-input"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div className="upload-input-container">
                <label htmlFor="altText">Alt Text</label>
                <textarea
                  id="altText"
                  placeholder="Enter Alt Text"
                  value={altText}
                  onChange={handleAltTextChange} 
                />
              </div>
              <div className="upload-button-container">
                <button
                  id="upload-button"
                  onClick={handleUpload}
                  disabled={isUploading}
                >
                  {isUploading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadModal;
