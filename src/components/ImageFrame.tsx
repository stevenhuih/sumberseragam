import { useState } from 'react';

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageFrame({ src, alt, className = '' }: ImageFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-brand-100/10 ${className}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105'
        }`}
      />
    </div>
  );
}
