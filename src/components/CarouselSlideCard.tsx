import React from 'react';
import { CarouselSlideCardProps } from '../types/carousel';

export const CarouselSlideCard: React.FC<CarouselSlideCardProps> = ({
  slide,
  isActive,
  aspectRatio = '1/1',
}) => {
  const getAspectRatioStyle = () => {
    switch (aspectRatio) {
      case '4/5':
        return { aspectRatio: '4 / 5' };
      case '16/9':
        return { aspectRatio: '16 / 9' };
      case '1/1':
      default:
        return { aspectRatio: '1 / 1' };
    }
  };

  return (
    <article
      className={`amigurumi-slide-card ${isActive ? 'is-active' : 'is-inactive'}`}
      aria-label={`Diapositiva ${slide.slideNumber}: ${slide.title}`}
      aria-hidden={!isActive}
      style={{
        ...getAspectRatioStyle(),
        width: '100%',
        maxWidth: '540px',
        margin: '0 auto',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        border: '1px solid #E8DDD0',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 8px 24px rgba(74, 53, 37, 0.08)',
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative',
        transition: 'opacity 0.28s ease, transform 0.28s ease',
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
      aria-hidden={!isActive}
    >
      {/* Header del Slide: Badge y Número */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span
          style={{
            backgroundColor: 'rgba(140, 154, 126, 0.16)',
            color: '#8C9A7E',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '4px 12px',
            borderRadius: '20px',
          }}
        >
          {slide.badge}
        </span>
        <span style={{ fontSize: '0.8rem', color: '#4A3525', fontWeight: 600 }}>
          {slide.slideNumber} / 3
        </span>
      </header>

      {/* Título Principal en Lora Itálica */}
      <div style={{ marginBottom: '14px' }}>
        <h3
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: '1.45rem',
            color: '#4A3525',
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {slide.title}
        </h3>
        {slide.subtitle && (
          <p style={{ margin: '6px 0 0 0', fontSize: '0.88rem', color: '#C86D63', fontWeight: 600 }}>
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Zona de Imagen / Mockup con CLS = 0 */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#F7F4EE',
          borderRadius: '12px',
          border: '1px dashed #E8DDD0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          overflow: 'hidden',
          minHeight: '140px',
        }}
      >
        <img
          src={slide.imageSrc}
          alt={slide.imageAlt}
          width={300}
          height={300}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
          loading="eager"
        />
      </div>

      {/* Pie del Slide con Descripción y CTA */}
      <footer style={{ marginTop: '14px' }}>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '0.88rem',
            color: '#4A3525',
            lineHeight: 1.45,
            margin: '0 0 12px 0',
          }}
        >
          {slide.description}
        </p>

        {slide.cta && (
          <a
            href={slide.cta.url}
            target={slide.cta.isExternal ? '_blank' : undefined}
            rel={slide.cta.isExternal ? 'noopener noreferrer' : undefined}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              backgroundColor: '#C86D63',
              color: '#F7F4EE',
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '12px 20px',
              borderRadius: '25px',
              textDecoration: 'none',
              minHeight: '44px', // Cumplimiento WCAG 2.1 AA Touch Target
              boxSizing: 'border-box',
              transition: 'transform 0.2s, background-color 0.2s',
            }}
          >
            {slide.cta.text}
          </a>
        )}
      </footer>
    </article>
  );
};
