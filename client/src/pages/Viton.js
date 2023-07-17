import React, { useState, useRef } from 'react';
import '../styles/Viton.css';

const Viton = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleImageUpload = (file) => {
    // Perform image upload logic here
    // You can use libraries like Axios or fetch to send the file to a server
    console.log('Uploading file:', file);
    // Update the state with the selected image
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleCustomButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleImageUpload(file);
  };

  return (
    <div className="viton-container">
      <h1 className="viton-title">Viton</h1>
      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className="selected-image" />
        ) : (
          <div className="upload-text">
            <p>Drag and drop an image or</p>
            <button className="custom-button" onClick={handleCustomButtonClick}>
              Select File
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileInputChange}
              className="file-input"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Viton;
