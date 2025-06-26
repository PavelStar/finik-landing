import article1 from "../assets/articles/article1.png";
import article1_2x from "../assets/articles/article1_2x.png";
import article1_tablet from "../assets/articles/article1_tablet.png";
import article1_tablet_2x from "../assets/articles/article1_tablet_2x.png";
import article1_mobile from "../assets/articles/article1_mobile.png";
import article1_mobile_2x from "../assets/articles/article1_mobile_2x.png";

import article2 from "../assets/articles/article2.png";
import article2_2x from "../assets/articles/article2_2x.png";
import article2_tablet from "../assets/articles/article2_tablet.png";
import article2_tablet_2x from "../assets/articles/article2_tablet_2x.png";
import article2_mobile from "../assets/articles/article2_mobile.png";
import article2_mobile_2x from "../assets/articles/article2_mobile_2x.png";

import article3 from "../assets/articles/article3.png";
import article3_2x from "../assets/articles/article3_2x.png";
import article3_tablet from "../assets/articles/article3_tablet.png";
import article3_tablet_2x from "../assets/articles/article3_tablet_2x.png";
import article3_mobile from "../assets/articles/article3_mobile.png";
import article3_mobile_2x from "../assets/articles/article3_mobile_2x.png";

import article4 from "../assets/articles/article4.png";
import article4_2x from "../assets/articles/article4_2x.png";
import article4_tablet from "../assets/articles/article4_tablet.png";
import article4_tablet_2x from "../assets/articles/article4_tablet_2x.png";
import article4_mobile from "../assets/articles/article4_mobile.png";
import article4_mobile_2x from "../assets/articles/article4_mobile_2x.png";

import type { IArticleCard } from "../components/ArticleCard/ArticleCard";

export const articlesData: Array<IArticleCard> = [
  {
    id: 1,
    href: "",
    image: {
      alt: "Сбер",
      images: {
        desktop: article1,
        desktop2x: article1_2x,
        tablet: article1_tablet,
        tablet2x: article1_tablet_2x,
        mobile: article1_mobile,
        mobile2x: article1_mobile_2x,
      },
    },
    date: "26 ноября 2024",
    title:
      "Дизайн интерфейса в&nbsp;&laquo;черную пятницу&raquo;: как&nbsp;выделиться среди конкурентов и&nbsp;позаботиться о&nbsp;пользователях",
  },
  {
    id: 2,
    href: "",
    image: {
      alt: "Сбер",
      images: {
        desktop: article2,
        desktop2x: article2_2x,
        tablet: article2_tablet,
        tablet2x: article2_tablet_2x,
        mobile: article2_mobile,
        mobile2x: article2_mobile_2x,
      },
    },
    date: "10 октября 2024",
    title:
      "Понятный интерфейс: чего&nbsp;избегать, чтобы&nbsp;не&nbsp;запутать пользователя",
  },
  {
    id: 3,
    href: "",
    image: {
      alt: "Сбер",
      images: {
        desktop: article3,
        desktop2x: article3_2x,
        tablet: article3_tablet,
        tablet2x: article3_tablet_2x,
        mobile: article3_mobile,
        mobile2x: article3_mobile_2x,
      },
    },
    date: "9 июля 2024",
    title:
      "Кейс: сложные интерфейсы для&nbsp;промышленного оборудования и&nbsp;дизайн-система за&nbsp;7&nbsp;месяцев",
  },
  {
    id: 4,
    href: "",
    image: {
      alt: "Сбер",
      images: {
        desktop: article4,
        desktop2x: article4_2x,
        tablet: article4_tablet,
        tablet2x: article4_tablet_2x,
        mobile: article4_mobile,
        mobile2x: article4_mobile_2x,
      },
    },
    date: "8 ноября 2022",
    title:
      "Как сделать интерфейс доступным для людей с&nbsp;ограниченными возможностями здоровья",
  },
];
