import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAyNkM5IDI2IDkgMTQgMjAgMTRTMzEgMjYgMjAgMjZaIiBmaWxsPSIjRDFENUREIi8+CjxwYXRoIGQ9Ik0yMCAyMkM5IDIyIDkgMTggMjAgMThTMzEgMjIgMjAgMjJaIiBmaWxsPSIjQjhCQ0M4Ii8+Cjwvc3ZnPgo=',
  width,
  height,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && !isError && (
        <img
          src={placeholder}
          alt=""
          className={`${className} absolute inset-0 w-full h-full object-cover blur-sm`}
          aria-hidden="true"
        />
      )}

      <img
        ref={imgRef}
        src={isInView || loading === 'eager' ? src : placeholder}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        width={width}
        height={height}
        decoding="async"
      />

      {isError && (
        <div className={`${className} bg-gray-200 flex items-center justify-center`}>
          <span className="text-gray-500 text-sm">فشل في تحميل الصورة</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
