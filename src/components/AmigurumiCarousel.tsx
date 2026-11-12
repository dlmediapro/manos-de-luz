import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AmigurumiCarouselProps } from '../types/carousel';
import { CarouselSlideCard } from './CarouselSlideCard';
import { CarouselControls } from './CarouselControls';

export const AmigurumiCarousel: React.FC<AmigurumiCarouselProps> = ({
  post,
  aspectRatio = '1/1',
  autoPlayInterval = 0,
  onSlideChange,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartXRef = useRef<number>(0);
  const touchEndXRef = useRef<number>(0);
  const totalSlides = post.slides.length;

  const handleSelectIndex = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSlides) {
        setCurrentIndex(index);
        if (onSlideChange) {
          onSlideChange(index);
        }
      }
    },
    [totalSlides, onSlideChange]
  );

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % totalSlides;
    handleSelectIndex(nextIdx);
  }, [currentIndex, totalSlides, handleSelectIndex]);

  const handlePrev = useCallback(() => {
    const prevIdx = (currentIndex - 1 + totalSlides) % totalSlides;
    handleSelectIndex(prevIdx);
  }, [currentIndex, totalSlides, handleSelectIndex]);

  // Soporte de navegación por teclado
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  // Soporte táctil (Touch Swipe)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const threshold = 40;

    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
  };

  // Soporte opcional de auto-play si autoPlayInterval > 0
  useEffect(() => {
    if (autoPlayInterval <= 0) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, handleNext]);

  return (
    <section
      className={`amigurumi-carousel-container ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={`Carrusel de publicación: ${post.themeTitle}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        width: '100%',
        maxWidth: '580px',
        margin: '0 auto',
        padding: '16px',
        boxSizing: 'border-box',
        outline: 'none',
      }}
    >
      {/* Encabezado contextual de la publicación */}
      <div style={{ textAlign: 'center', marginBottom: '14px' }}>
        <span
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#8C9A7E',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          Publicación #{post.postNumber} • {post.objective.replace('_', ' ')}
        </span>
        <h2
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: '1.5rem',
            color: '#4A3525',
            margin: '4px 0 0 0',
          }}
        >
          {post.themeTitle}
        </h2>
      </div>

      {/* Visor de Slide Activo con Transición Fluida */}
      <div
        className="carousel-track"
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          borderRadius: '20px',
        }}
      >
        <CarouselSlideCard
          slide={post.slides[currentIndex]}
          isActive={true}
          aspectRatio={aspectRatio}
        />
      </div>

      {/* Controles de Navegación Accesibles */}
      <CarouselControls
        totalSlides={totalSlides}
        currentIndex={currentIndex}
        onSelectIndex={handleSelectIndex}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
