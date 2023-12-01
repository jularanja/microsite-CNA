import React from 'react';
import Image from 'next/image';

const ImageGallery: React.FC = () => {
  const images = [
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    '/images/feirinha.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image, index) => (
        <div key={index} className="m-3">
            <Image className='rounded-md' src={image} alt={`Image ${index + 1}`} width={500} height={500} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;