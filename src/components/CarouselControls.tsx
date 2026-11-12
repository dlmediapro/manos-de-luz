import React from 'react';
import { CarouselControlsProps } from '../types/carousel';

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  totalSlides,
  currentIndex,
  onSelectIndex,
  onNext,
  onPrev,
}) => {
  return (
    <nav
      className="amigurumi-carousel-controls"
      aria-label="Controles del carrusel"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '540px',
        margin: '16px auto 0 auto',
        padding: '8px 16px',
        backgroundColor: '#F7F4EE',
        borderRadius: '30px',
        border: '1px solid #E8DDD0',
        boxSizing: 'border-box',
      }}
    >
      {/* Botón Anterior con Touch Target WCAG >= 44x44px */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="Diapositiva anterior"
        style={{
          width: '44px',
          height: '44px',
          minWidth: '44px',
          minHeight: '44px',
          borderRadius: '50%',
          backgroundColor: '#4A3525',
          color: '#F7F4EE',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          transition: 'background-color 0.2s, transform 0.2s',
        }}
      >
        ‹
      </button>

      {/* Indicadores de Puntos accesibles */}
      <div role="tablist" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isSelected = idx === currentIndex;
          return (
            <button
              key={`dot-${idx}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-label={`Ir a diapositiva ${idx + 1}`}
              onClick={() => onSelectIndex(idx)}
              style={{
                width: isSelected ? '32px' : '14px',
                height: '10px',
                minHeight: '44px', // WCAG interactive area
                padding: '17px 0',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: isSelected ? '28px' : '10px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: isSelected ? '#C86D63' : '#E8DDD0',
                  transition: 'all 0.25s ease',
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Botón Siguiente con Touch Target WCAG >= 44x44px */}
      <button
        type="button"
        onClick={onNext}
        aria-label="Diapositiva siguiente"
        style={{
          width: '44px',
          height: '44px',
          minWidth: '44px',
          minHeight: '44px',
          borderRadius: '50%',
          backgroundColor: '#4A3525',
          color: '#F7F4EE',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          transition: 'background-color 0.2s, transform 0.2s',
        }}
      >
        ›
      </button>
    </nav>
  );
};
