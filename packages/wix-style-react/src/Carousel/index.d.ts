import * as React from 'react';

export interface CarouselProps {
  dataHook?: string;
  className?: string;
  images?: CarouselImage[];
  buttonSkin?: CarouselButtonSkin;
  infinite?: boolean;
  autoplay?: boolean;
  dots?: boolean;
  variableWidth?: boolean;
  initialSlideIndex?: number;
  afterChange?: (currentSlide: number) => void;
  beforeChange?: (currentSlide: number, nextSlide: number) => void;
}

export default class Carousel extends React.Component<CarouselProps> {}

export type CarouselButtonSkin = 'standard' | 'inverted';

export type CarouselImage = Partial<HTMLImageElement> & { src: string };
