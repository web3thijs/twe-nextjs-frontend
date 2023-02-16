import React from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((imageUrl) => {
          return (
            <div key={imageUrl} className="w-full h-full relative">
              <Image src={imageUrl} layout="fill" objectFit="contain" alt="gallery image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
