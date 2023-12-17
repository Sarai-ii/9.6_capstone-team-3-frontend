//UploadModal.js
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import Modal from 'react-modal';

const UploadModal = ({ isOpen, onRequestClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);
  const [altText, setAltText] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const MAX_FILE_SIZE_MB = 5 * 1024 * 1024; // 5 MB
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    try {
        if (file && file.size > MAX_FILE_SIZE_BYTES) {
            throw new Error ('File size exceeds the maximum limit of ${MAX_FILE_SIZE_MB} MB. Please choose a smaller file.');
        }
        
        setSelectedFile(file);

        // Read and display a thumbnail preview of the selected image
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
            setFileUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    } catch (error) {
        console.error('File size validation failed:', error.message);
        alert(error.message);
        event.target.value = null; // Clear the file input
    }



  };

  const handleAltTextChange = (event) => {
    setAltText(event.target.value);
  };

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    setIsUploading(true);


    // Validation
    // if (!title.trim()) {
    //   alert('Title is required.');
    //   return;
    // }

    // Perform the logic with the selected file, alt text, title, and description
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Selected File:', selectedFile);
    console.log('Alt Text:', altText);

    // Clear the form state
    setTitle('');
    setDescription('');
    setAltText('');

    // Close the modal
    onRequestClose();
  };

  const openUploadModal = () => {
    setIsModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsModalOpen(false);
    // Optionally, you can clear the selected file and any other form state here
    setSelectedFile(null);
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Upload Modal"
    >
      <div className='form'>
        <form onSubmit={onUpload} encType="multipart/form-data">

          <p>Make sure that your gifter gets credit for sending you a gift!</p>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Enter Title"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Thoughts on your gift</label>
              <textarea
                id="description"
                placeholder="Enter Description"
                value={description}
                onChange={handleDescriptionChange}
                rows="4"
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Upload Image</label>
              <input type="file" id="file" onChange={handleFileChange} />
            </div>
            {selectedFile && (
              <div>
                <h2>Thumbnail Preview:</h2>
                <img src={fileUrl} alt={altText} className="thumbnail" />
                <div className="form-group">
                  <label htmlFor="altText">
                    Alt Text
                    <span className="info-box">
                      <span className="info-text">
                        Alt text (alternative text) describes the appearance or function of an image on a web page.
                        Alt text is read aloud by programs called screen readers which are used by people with visual impairments and low vision.
                        Alt text displays in place of an image if it fails to load, and is indexed by search engine bots to better understand image and page content.
                      </span>
                    </span>
                  </label>
                  <textarea
                    id="altText"
                    placeholder="Enter Alt Text"
                    value={altText}
                    onChange={handleAltTextChange}
                    rows="4"
                  />
                </div>
              </div>
            )}
            <button className="button" type='submit'>Upload</button>
        </form>
      </div>
      <button className="button" onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default UploadModal;
