// import slide1 from "../assets/slider/slide-1.png";
import slide2 from "../assets/slider/slide-2.png";
import slide3 from "../assets/slider/slide-3.png";
import slide4 from "../assets/slider/slide-4.png";
// import slide5 from "../assets/slider/slide-5.png";

export interface ISlide {
  id: number;
  image?: string;
}

export const slides: Array<ISlide> = [
  // {
  //   id: 1,
  //   image: slide1,
  // },
  {
    id: 2,
    image: slide2,
  },
  {
    id: 3,
    image: slide3,
  },
  {
    id: 4,
    image: slide4,
  },
  // {
  //   id: 5,
  //   image: slide5,
  // },
];
