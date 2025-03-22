import React, { useState, useRef } from "react";
import Dummy from "../../../src/assets/teacher.png";


const imageGallery = [
  { id: 2, url: Dummy },
  { id: 1, url: Dummy },
  { id: 3, url: Dummy },
  { id: 4, url: Dummy },
  { id: 5, url: Dummy },
  { id: 6, url: Dummy },
  { id: 7, url: Dummy },
  { id: 8, url: Dummy },
  { id: 9, url: Dummy },
  { id: 10, url: Dummy },
  { id: 11, url: Dummy },
  { id: 12, url: Dummy },
  { id: 13, url: Dummy },
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const longPressTimeout = useRef(null);

  const handleLongPress = (image) => {
    longPressTimeout.current = setTimeout(() => {
      setSelectedImage(image.url);
    }, 500); // Long press duration
  };

  const handleRelease = () => {
    clearTimeout(longPressTimeout.current);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        🖼️ Image Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {imageGallery.map((image) => (
          <div
            key={image.id}
            className="border p-2 rounded-lg shadow-lg"
            onTouchStart={() => handleLongPress(image)}
            onTouchEnd={handleRelease}
            onMouseDown={() => handleLongPress(image)}
            onMouseUp={handleRelease}
          >
            <img
              src={image.url}
              alt="gallery"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Pop-up */}
      {selectedImage && (
          <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-white/1 backdrop-blur-[3px]"
          onClick={handleClosePopup}
        >
          <img
            src={selectedImage}
            alt="Full Size"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
