import React, { useState } from 'react';
import { storageRef } from '../firebaseStorage'; 
import { getStorage, ref, uploadBytes } from 'firebase/storage';

import "../css/Upload.css";

const UploadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const MAX_FILE_SIZE_MB = 5; // Maximum file size in MB
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
      // Use the storage reference from firebaseStorage.js
      const fileName = `${Date.now()}_${selectedFile.name}`;
      const fileRef = ref(storageRef, fileName);

      // Upload the file
      const snapshot = await uploadBytes(fileRef, selectedFile);

      console.log('File uploaded successfully:', snapshot);

      // TODO: Add additional logic here if needed after successful upload

      alert('Upload success!');
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
              <h2 className="upload-modal-title">Upload Modal</h2>
            </div>
            <div id="upload-form-container">
              <input id="upload-input" type="file" onChange={handleFileChange} />
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
      )}
    </div>
  );
};

export default UploadModal;
