import slide1 from "../assets/results/results-slide-1.png";

export interface ISlide {
  id: number;
  image?: string;
}

export const slides: Array<ISlide> = [
  {
    id: 2,
    image: slide1,
  },
  {
    id: 3,
    image: slide1,
  },
  {
    id: 4,
    image: slide1,
  },
];
