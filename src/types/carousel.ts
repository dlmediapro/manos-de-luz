/**
 * carousel.ts
 * Definición estricta de interfaces y tipos para la campaña y UI de carruseles.
 * Cliente: Tejidos Manos de Luz (SoC: Capa de Modelos de Datos)
 */

export type CampaignObjective =
  | 'vender'
  | 'interes_genuino'
  | 'transmitir_carino'
  | 'construir_comunidad';

export interface SlideCTA {
  text: string;
  url: string;
  isExternal?: boolean;
}

export interface CarouselSlide {
  id: string;
  slideNumber: number; // 1, 2, 3
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  cta?: SlideCTA;
  visualDirectionNotes?: string;
}

export interface CarouselPost {
  id: string;
  postNumber: number;
  objective: CampaignObjective;
  themeTitle: string;
  feedHook: string;
  feedCaption: string;
  hashtags: string[];
  slides: [CarouselSlide, CarouselSlide, CarouselSlide]; // Exactamente 3 diapositivas
}

export interface AmigurumiCarouselProps {
  post: CarouselPost;
  aspectRatio?: '1/1' | '4/5' | '16/9';
  autoPlayInterval?: number; // en milisegundos (0 = desactivado)
  onSlideChange?: (currentSlideIndex: number) => void;
  className?: string;
}

export interface CarouselSlideCardProps {
  slide: CarouselSlide;
  isActive: boolean;
  aspectRatio?: '1/1' | '4/5' | '16/9';
}

export interface CarouselControlsProps {
  totalSlides: number;
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

