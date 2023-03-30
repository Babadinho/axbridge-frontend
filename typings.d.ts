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
