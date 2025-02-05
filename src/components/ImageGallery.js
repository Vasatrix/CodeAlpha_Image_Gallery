import React, { useState } from 'react';
import './ImageGallery.css';
import ThumbnailNavigator from './ThumbnailNavigator';

const images = [
  'https://cdn.pixabay.com/photo/2015/03/30/20/33/hearts-700141_960_720.jpg',
  'https://cdn.pixabay.com/photo/2023/03/17/20/42/camera-7859402_1280.jpg',
  'https://cdn.pixabay.com/photo/2025/01/09/16/33/playing-cards-9322164_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/04/14/20/52/lake-7925872_1280.jpg',
];

function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="gallery-container">
      <div className="image-container">
        <button className="nav-button" onClick={handlePrevious}>
          &#8249;
        </button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="image" />
        <button className="nav-button" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <ThumbnailNavigator images={images} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
    </div>
  );
}

export default ImageGallery;

