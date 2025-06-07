import sber from "../assets/cases/sber.png";
// import sber2x from "../assets/cases/sber@2x.png";
import sberTablet from "../assets/cases/sber-tablet.png";
import sberMobile from "../assets/cases/sber-mobile.png";

import t2 from "../assets/cases/t2.png";
// import t22x from "../assets/cases/t2@2x.png";
import t2Tablet from "../assets/cases/t2-tablet.png";
import t2Mobile from "../assets/cases/t2-mobile.png";

import sberBusiness from "../assets/cases/sber-business.png";
// import sberBusiness2x from "../assets/cases/sber-business@2x.png";
import sberBusinessTablet from "../assets/cases/sber-business-tablet.png";
import sberBusinessMobile from "../assets/cases/sber-business-mobile.png";

import rostelekom from "../assets/cases/rostelekom.png";
// import rostelekom2x from "../assets/cases/rostelekom@2x.png";
import rostelekomTablet from "../assets/cases/rostelekom-tablet.png";
import rostelekomMobile from "../assets/cases/rostelekom-mobile.png";

export interface IPictureItem {
  id: number;
  alt: string;
  title: string;
  images: {
    desktop: string;
    desktop2x?: string;
    tablet?: string;
    tablet2x?: string;
    mobile?: string;
    mobile2x?: string;
  };
}

export const CASES: IPictureItem[] = [
  {
    id: 1,
    alt: "Сбер",
    title: "Сбер",
    images: {
      desktop: sber,
      desktop2x: sber,
      tablet: sberTablet,
      tablet2x: sberTablet,
      mobile: sberMobile,
      mobile2x: sberMobile,
    },
  },
  {
    id: 12,
    alt: "T2",
    title: "Т2",
    images: {
      desktop: t2,
      desktop2x: t2,
      tablet: t2Tablet,
      tablet2x: t2Tablet,
      mobile: t2Mobile,
      mobile2x: t2Mobile,
    },
  },
  {
    id: 3,
    alt: "Сбер-бизнес",
    title: "Сбер-бизнес",
    images: {
      desktop: sberBusiness,
      desktop2x: sberBusiness,
      tablet: sberBusinessTablet,
      tablet2x: sberBusinessTablet,
      mobile: sberBusinessMobile,
      mobile2x: sberBusinessMobile,
    },
  },
  {
    id: 4,
    alt: "Ростелеком",
    title: "Ростелеком",
    images: {
      desktop: rostelekom,
      desktop2x: rostelekom,
      tablet: rostelekomTablet,
      tablet2x: rostelekomTablet,
      mobile: rostelekomMobile,
      mobile2x: rostelekomMobile,
    },
  },
];
