// ProofPage.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/proofPage.css';

const ProofPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);
  const [altText, setAltText] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.size > MAX_FILE_SIZE) {
      alert('File size exceeds the maximum limit of 5 MB. Please choose a smaller file.');
      event.target.value = null; // Clear the file input
      return;
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
  };

  const handleAltTextChange = (event) => {
    setAltText(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = (event) => {
    event.preventDefault();

    // Validation
    if (!title.trim()) {
      alert('Title is required.');
      return;
    }

    // Perform the logic with the selected file, alt text, title, and description
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Selected File:', selectedFile);
    console.log('Alt Text:', altText);
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
    <div className='proof-page'>
      <h1>Upload a picture of your gift</h1>
      <p>Make sure that your gifter gets credit for sending you a gift!</p>


      <button className="button" onClick={openUploadModal}>Open Upload Modal</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeUploadModal}
        contentLabel="Upload Modal"
      >



        <div className='form'>
          <form onSubmit={handleUpload} encType="multipart/form-data">
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
        <button className="button" onClick={closeUploadModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default ProofPage;


/*

const ProofPage = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [altText, setAltText] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');



    // Read and display a thumbnail preview of the selected image
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFileUrl(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

  //   // Display the selected image
  //   const url = URL.createObjectURL(file);
  //   setFileUrl(url);  
  // };
  };

  return (
    <div className='proof-page'>
      <h1>Hurrah, Your Gift Arrived!</h1>
      <p>Take a picture to give credit where credit is due.</p>

        <div className='form'>
            <form onSubmit={handleUpload} encType="multipart/form-data">
            <div className='form-group'>
                <label htmlFor="title">Title:</label>
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
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  placeholder="Enter Description"
                  value={description}
                  onChange={handleDescriptionChange}
                  rows="7"
                />
              </div>
              <div className='form-group'>
                <label htmlFor="file">Upload Image:</label>
                <input type="file" id="file" onChange={handleFileChange} />
              </div>
              {fileUrl && (
                <div>
                  <h2>Selected Image:</h2>
                  <img src={fileUrl} alt={altText} />
                  <div className='form-group'>
                    <label htmlFor="altText">Alt Text:</label>
                    <input
                      type="text"
                      id="altText"
                      placeholder="Enter Alt Text"
                      value={altText}
                      onChange={handleAltTextChange}
                    />                    
                  </div>
                </div>
              )}
 
              <button className="button" type='submit'>Upload</button>
            </form>
        </div>
    </div>
  );
};

*/