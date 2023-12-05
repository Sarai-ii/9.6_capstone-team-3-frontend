// ProofPage.js
import React, { useState } from 'react';

const ProofPage = () => {

  const [selectedFile, setSelectedFile] = useState(null);
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

    // Display the selected image
    const url = URL.createObjectURL(file);
    setFileUrl(url);  
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
    console.log('Selected File:', selectedFile);
    console.log('Alt Text:', altText);
    console.log('Title:', title);
    console.log('Description:', description);
  };

  return (
    <div className='proof-page'>
      <h1>Hurrah, Your Gift Arrived!</h1>
      <p>Take a picture to give credit where credit is due.</p>

        <div className='form'>
            <form onSubmit={handleUpload} encType="multipart/form-data">
            <input type="file" onChange={handleFileChange} />
                <input 
                  type="file" 
                  placeholder='Enter Alt Text'
                  value={altText}
                  onChange={handleAltTextChange} 
                />
                <input
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={handleTitleChange}
                  required
                />
                <textarea
                  placeholder="Enter Description (optional, up to two paragraphs)"
                  value={description}
                  onChange={handleDescriptionChange}
                  rows="4"
                />
                <button className="button" type='submit'>Upload</button>
            </form>
        </div>

        {fileUrl && (
        <div>
          <h2>Selected Image:</h2>
          <img src={fileUrl} alt={altText} />
        </div>
      )}
    </div>
  );
};

export default ProofPage;
