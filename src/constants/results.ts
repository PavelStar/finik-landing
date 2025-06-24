import slide1 from "../assets/results/results-slide-1.png";
import type { IPicture } from "../types/types";

export interface ISlide {
  id: number;
  image: IPicture;
}

export const slides: Array<ISlide> = [
  {
    id: 2,
    image: {
      alt: "Сбер",
      images: {
        desktop: slide1,
        desktop2x: slide1,
        tablet: slide1,
        tablet2x: slide1,
        mobile: slide1,
        mobile2x: slide1,
      },
    },
  },
  {
    id: 3,
    image: {
      alt: "Сбер",
      images: {
        desktop: slide1,
        desktop2x: slide1,
        tablet: slide1,
        tablet2x: slide1,
        mobile: slide1,
        mobile2x: slide1,
      },
    },
  },
  {
    id: 4,
    image: {
      alt: "Сбер",
      images: {
        desktop: slide1,
        desktop2x: slide1,
        tablet: slide1,
        tablet2x: slide1,
        mobile: slide1,
        mobile2x: slide1,
      },
    },
  },
];
