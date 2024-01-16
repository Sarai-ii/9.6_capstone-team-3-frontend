// Gallery.js
import React from 'react';
import FullGallery from '../components/FullGallery';
import UploadModal from '../components/UploadModal';



function Gallery({ previewMode }) {
  return (
    <div className='gallery'>
      <FullGallery />
      <div className='testing-pictures'>
        {previewMode ? null : <UploadModal />}
      </div>
    </div>
  );
}

export default Gallery;
