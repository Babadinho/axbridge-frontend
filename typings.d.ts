import { Variants } from 'framer-motion';

export interface CarouselItem {
  id: number;
  title: ReactElement;
  subtitle: string;
  description: string;
  image: string;
  button?: string;
  animation?: Variants;
}

export interface Carousel extends Array<CarouselItem> {}

export interface SliderProps {
  slide: CarouselItem;
  activeIndex: number;
}

export interface PracticeItem {
  id: number;
  image: string;
  icon: ReactElement;
  title: string;
  description: string;
  link: string;
}
[];
