// src/components/RMGImage.tsx

import React from 'react';

interface RMGImageProps {
  src: string;
  alt: string;
}

const RMGImage: React.FC<RMGImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default RMGImage;
