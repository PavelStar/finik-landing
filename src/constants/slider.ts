// import slide1 from "../assets/slider/slide-1.png";
import slide2 from "../assets/slider/slide-2.png";
import slide3 from "../assets/slider/slide-3.png";
import slide4 from "../assets/slider/slide-4.png";
import type { IPicture } from "../types/types";
// import slide5 from "../assets/slider/slide-5.png";

export interface ISlide {
  id: number;
  image: IPicture;
}

export const slides: Array<ISlide> = [
  // {
  //   id: 1,
  //   image: slide1,
  // },
  {
    id: 2,
    image: {
      alt: "Сбер",
      images: {
        desktop: slide2,
        desktop2x: slide2,
        tablet: slide2,
        tablet2x: slide2,
        mobile: slide2,
        mobile2x: slide2,
      },
    },
  },
  {
    id: 3,
    image: {
      alt: "Сбер",
      images: {
        desktop: slide3,
        desktop2x: slide3,
        tablet: slide3,
        tablet2x: slide3,
        mobile: slide3,
        mobile2x: slide3,
      },
    },
  },
  {
    id: 4,
    image: {
      alt: "Сбер",
      images: {
        desktop: slide4,
        desktop2x: slide4,
        tablet: slide4,
        tablet2x: slide4,
        mobile: slide4,
        mobile2x: slide4,
      },
    },
  },
  // {
  //   id: 5,
  //   image: slide5,
  // },
];
