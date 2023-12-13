import React, { useState } from 'react';
import UploadModal from './UploadModal';
import '../css/messages.css';

function MessageProof() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openUploadModal = () => {
    setIsModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsModalOpen(false);
    // Optionally, you can clear the selected file and any other form state here
    setSelectedFile(null);
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
    closeUploadModal();
  };


  return (
<div className="message">
    {/* <h1>logo here</h1> */}
    <h2>Time to add to the gallery!</h2>
    <p>
        Take a picture and upload it to the gallery {' '}
        <button onClick={openUploadModal}>here</button>. Adding your picture lets us know that your match did their job. You will be given an opportunity to leave a little note describing your gift and/or thoughts. Our aim is to spread joy! 
    </p>
    <p>
        Please don't leave a negative note. 
    </p>
    <p>
        Even if you are disappointed in your gift, your match went out of their way to think about what you might like and send it to you. If you really can't think of anything nice to say, saying "Thanks for the gift" is perfectly accceptable. 
    </p>
    <p>
        The one exception is if you received something inappropriate or against the rules/law. In that case, don't upload the picture and let us know immediately at ResponseTeam@HappinessExchange.com.
    </p>

    <p>
        We look forward to seeing you at our next event.
    </p>
    <p>
        Best Regards, Happiness Exchange
    </p>

      {/* Modal */}
      <UploadModal
        isOpen={isModalOpen}
        onRequestClose={closeUploadModal}
        onUpload={handleUpload}
      />

</div>
  )
}

export default MessageProof