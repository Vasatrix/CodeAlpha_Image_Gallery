import React from 'react';
import './ThumbnailNavigator.css';

function ThumbnailNavigator({ images, setCurrentIndex, currentIndex }) {
  return (
    <div className="thumbnail-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Thumbnail ${index + 1}`}
          className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
}

export default ThumbnailNavigator;
