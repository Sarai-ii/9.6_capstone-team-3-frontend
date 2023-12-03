// ImageUploadForm.js


// import React, { useState } from 'react';

// const ImageUploadForm = ({ onFileSelect }) => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       onFileSelect(selectedFile);
//     }
//   };

//   return (
//     <div className="UploadImage">
//       <input type="file" onChange={(event)=>handleFileChange(event)} />
//       <button className="button" onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default ImageUploadForm;
