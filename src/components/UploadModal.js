// UploadModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { storageRef } from '../firebaseStorage'; // Updated import
import { getStorage, ref, uploadBytes } from 'firebase/storage';

Modal.setAppElement('#root');

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
      <button onClick={openModal}>Open Upload Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Upload Modal"
        appElement={document.getElementById('root')}
      >
        <h2>Upload Modal</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default UploadModal;
