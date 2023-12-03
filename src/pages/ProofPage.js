// ProofPage.js
import React, { useState } from 'react';

const ProofPage = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (selectedFile) {
      onFileSelect(selectedFile);
      console.log('Selected File:', selectedFile);
    }
  };


  return (
    <div className='proof-page'>
      <h1>Upload a picture of your gift</h1>
      <p>Make sure that your gifter gets credit for sending you a gift!</p>

        <div className='form'>
            <form onSubmit={handleUpload} encType="multipart/form-data">
                <input type="file" onChange={handleFileChange} />
                <button className="button" type='submit'>Upload</button>
            </form>
        </div>
    </div>
  );
};

export default ProofPage;
