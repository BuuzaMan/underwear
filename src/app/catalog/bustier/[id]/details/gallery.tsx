"use client"
import React, { useState } from "react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center gap-4 mr-[40px]">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-[137px] h-[137px] overflow-hidden border ${
              selectedImageIndex === index ? "" : ""
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </button>
        ))}
      </div>
      <div className="w-[492px] h-[565px] overflow-hidden">
        <img
          src={images[selectedImageIndex]}
          alt={`Selected ${selectedImageIndex + 1}`}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default ImageGallery;