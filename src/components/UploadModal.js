//UploadModal.js
import React, { useState } from 'react';
import 'firebase/storage';
import Modal from 'react-modal';
import '../css/uploadModal.css'

Modal.setAppElement('#root'); //this is so accessibility readers can read the modal

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


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Upload Modal"
      appElement={document.getElementById('root')} //setting the app element to fix ARIA warning
    >
    <button className='close-button' onClick={onRequestClose}>
        <span aria-hidden="true">&times;</span>
    </button>
      <div className='form'>
        <form onSubmit={onUpload} encType="multipart/form-data">

          <h2 className='top-row'>Show everyone what you got!</h2>
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
              <input type="file" id="file" onChange={handleFileChange} />
            </div>
            {selectedFile && (
              <div className='thumbnail'>
                <h2>Thumbnail Preview:</h2>
                <img src={fileUrl} alt={altText} className="thumbnail-image" />
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
            <button className="button button-right" type='submit'>Upload</button>
        </form>
      </div>
    </Modal>
  );
};

export default UploadModal;

/* DELETED CODE. GET RID OF IF THE APP WORKS WIHOUT IT 
  const handleUpload = async (event) => {
    event.preventDefault();
    setIsUploading(true);

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

  */
