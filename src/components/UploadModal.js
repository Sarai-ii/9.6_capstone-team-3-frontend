import React, { useState } from 'react';
import { storageRef } from '../firebaseStorage'; 
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import axios from 'axios';

import "../css/Upload.css";

const UploadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [blurb, setBlurb] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const MAX_FILE_SIZE_MB = 5; // Maximum file size in MB
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setTitle('');
    setBlurb('');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file && file.size > MAX_FILE_SIZE_BYTES) {
      alert(`File size exceeds the maximum limit of ${MAX_FILE_SIZE_MB} MB. Please choose a smaller file.`);
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please choose a file to upload.');
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

      console.log('File uploaded successfully:', snapshot);
      console.log('Download URL:', downloadURL);

      // Now you can use the downloadURL to make a POST request to your backend
      const picturePostData = {
        pictures_post_title: title || 'Untitled', // Set your title here or default to 'Untitled'
        pictures_post_blurb: blurb || 'No comment', // Set your blurb here or default to 'No comment'
        pictures_post_URL: downloadURL,
        likes_count: 0,
      };

      // Make a POST request to your backend
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/pictures`, picturePostData);

      if (response.data.success) {
        alert('Upload success!');
      } else {
        alert(response.data.message || 'Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
      closeModal();
    }
  };

  return (
    <div>
      <button id="upload-gift-button" onClick={openModal}>Upload Gift</button>
      {isOpen && (
        <div className="upload-modal-container">
          <div className="upload-modal-content">
            <span id='upload-close-container' className="upload-modal-close" onClick={closeModal}>
              &times;
            </span>
            <div id="upload-modal-header">
              <h2 className="upload-modal-title">Upload Gift</h2>
            </div>
            <div id="upload-modal-subheader">
              <h3 id="upload-modal-h3">Share the expreince of Happiness Exchange</h3>
            </div>
            <div id="upload-form-container">
   
              <div className="upload-input-container">
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="upload-input-container">
                <label>Comment:</label>
                <textarea value={blurb} onChange={(e) => setBlurb(e.target.value)}></textarea>
                <input id="upload-input" type="file" onChange={handleFileChange} />
              </div>
              <div className='upload-button-container'>
                <button
                  id="upload-button"
                  onClick={handleUpload}
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Upload'}
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


