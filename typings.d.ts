interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  button?: string;
}
[];

export interface Carousel extends Array<CarouselItem> {}
