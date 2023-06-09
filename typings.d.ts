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
  icon: ReactElement;
  title: string;
  description: string;
  link: string;
}
[];

export interface TeamItem {
  id: number;
  name: string;
  image: string;
  role: ReactElement;
  facebook: string;
  twitter: string;
  instagram: string;
}
[];

export interface BlogItem {
  id: number;
  date: string;
  image: string;
  author: string;
  category: string;
  comments: number;
  title: string;
  description: string;
  isMini: boolean;
}

export interface TestimonialItem {
  id: number;
  title: string;
  description: string;
  author: string;
  company: string;
}
[];

export interface PageHeaderItem {
  image: string;
  breadcrumb?: string;
  heading: string;
  description?: string;
}
