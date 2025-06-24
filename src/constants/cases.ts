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

import projectImg from "../assets/cases/project-img.png";
import projectImgTablet from "../assets/cases/project-img-tablet.png";
import projectImgMobile from "../assets/cases/project-img-mobile.png";
import type { IPicture } from "../types/types";

export interface ICaseItem {
  id: string | number;
  title: string;
  image: IPicture;
}

export const CASES: ICaseItem[] = [
  {
    id: 1,
    title: "Сбер",
    image: {
      alt: "Сбер",
      images: {
        desktop: sber,
        desktop2x: sber,
        tablet: sberTablet,
        tablet2x: sberTablet,
        mobile: sberMobile,
        mobile2x: sberMobile,
      },
    },
  },
  {
    id: 2,
    title: "Т2",
    image: {
      alt: "T2",
      images: {
        desktop: t2,
        desktop2x: t2,
        tablet: t2Tablet,
        tablet2x: t2Tablet,
        mobile: t2Mobile,
        mobile2x: t2Mobile,
      },
    },
  },
  {
    id: 3,
    title: "Сбер-бизнес",
    image: {
      alt: "Сбер-бизнес",
      images: {
        desktop: sberBusiness,
        desktop2x: sberBusiness,
        tablet: sberBusinessTablet,
        tablet2x: sberBusinessTablet,
        mobile: sberBusinessMobile,
        mobile2x: sberBusinessMobile,
      },
    },
  },
  {
    id: 4,
    title: "Ростелеком",
    image: {
      alt: "Ростелеком",
      images: {
        desktop: rostelekom,
        desktop2x: rostelekom,
        tablet: rostelekomTablet,
        tablet2x: rostelekomTablet,
        mobile: rostelekomMobile,
        mobile2x: rostelekomMobile,
      },
    },
  },
];

// interface ICaseData {
//   id: number | string;
// }

export const casesData = [
  {
    id: 1,
    casePageData: {
      image: {
        id: 1,
        title: "Сбер",
        images: {
          alt: "Сбер",
          desktop: projectImg,
          desktop2x: projectImg,
          tablet: projectImgTablet,
          tablet2x: projectImgTablet,
          mobile: projectImgMobile,
          mobile2x: projectImgMobile,
        },
      },
      intro: {
        title: "Сбер",
        description:
          "Коротко о главном: как мы помогли [клиенту] решить [проблему] и добиться [результата]",
      },
      mainImage: {},
      mainInfo: {
        title: "",
        list: [
          {
            id: 1,
            title: "Клиент: ",
            description: "Название компании, сфера деятельности",
          },
          {
            id: 2,
            title: "Задачи: ",
            description: "Какие проблемы решал проект?",
          },
          {
            id: 3,
            title: "Сроки: ",
            description: "Сколько времени заняла реализация",
          },
          {
            id: 4,
            title: "Команда: ",
            description:
              "Кто работал над проектом (дизайнеры, разработчики, менеджеры)",
          },
          {
            id: 5,
            title: "Ссылка на проект: ",
            description: "example.com",
          },
        ],
      },
      details: {
        list: [
          {
            id: 1,
            title: "Цель клиента",
            description:
              "[Клиент] хотел [основная цель], но столкнулся с [проблемой]. Наша задача – решить это через [стратегию: дизайн, технологию, редизайн]",
          },
          {
            id: 2,
            title: "Вызовы",
            description:
              "[Клиент] хотел [основная цель], но столкнулся с [проблемой]. Наша задача – решить это через [стратегию: дизайн, технологию, редизайн]",
            list: ["[Вызов 1]", "[Вызов 2]", "[Вызов 3]"],
          },
          {
            id: 3,
            title: "Исследования и аналитика",
            description:
              "Перед началом работы мы провели [аудит / опросы / анализ конкурентов] и выяснили:",
            list: ["[Инсайт 1]", "[Инсайт 2]", "[Инсайт 3]"],
          },
          {
            id: 4,
            title: "Функционал и особенности",
            description: "В проекте мы реализовали:",
            list: ["[Фича 1]", "[Фича 2]", "[Фича 3]"],
          },
        ],
      },
      results: [
        {
          id: 1,
          title: "",
          description: "",
          images: [],
        },
      ],
      metrics: {
        title: "",
        list: [
          {
            id: 1,
            number: "01",
            title: "Конверсия выросла на [X]%",
          },
          {
            id: 2,
            number: "02",
            title: "Время на сайте увеличилось до [X] минут",
          },
          {
            id: 3,
            number: "03",
            title: "Продажи выросли в [X] раз",
          },
        ],
      },
    },
  },
  {
    id: 2,
    casePageData: {
      image: {
        id: 1,
        title: "Сбер",
        images: {
          alt: "Сбер",
          desktop: projectImg,
          desktop2x: projectImg,
          tablet: projectImgTablet,
          tablet2x: projectImgTablet,
          mobile: projectImgMobile,
          mobile2x: projectImgMobile,
        },
      },
      intro: {
        title: "T2",
        description:
          "Коротко о главном: как мы помогли [клиенту] решить [проблему] и добиться [результата]",
      },
      mainImage: {},
      mainInfo: {
        title: "",
        list: [
          {
            id: 1,
            title: "Клиент: ",
            description: "Название компании, сфера деятельности",
          },
          {
            id: 2,
            title: "Задачи: ",
            description: "Какие проблемы решал проект?",
          },
          {
            id: 3,
            title: "Сроки: ",
            description: "Сколько времени заняла реализация",
          },
          {
            id: 4,
            title: "Команда: ",
            description:
              "Кто работал над проектом (дизайнеры, разработчики, менеджеры)",
          },
          {
            id: 5,
            title: "Ссылка на проект: ",
            description: "example.com",
          },
        ],
      },
      details: {
        list: [
          {
            id: 1,
            title: "Цель клиента",
            description:
              "[Клиент] хотел [основная цель], но столкнулся с [проблемой]. Наша задача – решить это через [стратегию: дизайн, технологию, редизайн]",
          },
          {
            id: 2,
            title: "Вызовы",
            description:
              "[Клиент] хотел [основная цель], но столкнулся с [проблемой]. Наша задача – решить это через [стратегию: дизайн, технологию, редизайн]",
            list: ["[Вызов 1]", "[Вызов 2]", "[Вызов 3]"],
          },
          {
            id: 3,
            title: "Исследования и аналитика",
            description:
              "Перед началом работы мы провели [аудит / опросы / анализ конкурентов] и выяснили:",
            list: ["[Инсайт 1]", "[Инсайт 2]", "[Инсайт 3]"],
          },
          {
            id: 4,
            title: "Функционал и особенности",
            description: "В проекте мы реализовали:",
            list: ["[Фича 1]", "[Фича 2]", "[Фича 3]"],
          },
        ],
      },
      results: [
        {
          id: 1,
          title: "",
          description: "",
          images: [],
        },
      ],
      metrics: {
        title: "",
        list: [
          {
            id: 1,
            number: "01",
            title: "Конверсия выросла на [X]%",
          },
          {
            id: 2,
            number: "02",
            title: "Время на сайте увеличилось до [X] минут",
          },
          {
            id: 3,
            number: "03",
            title: "Продажи выросли в [X] раз",
          },
        ],
      },
    },
  },
  {
    id: 3,
    casePageData: {
      image: {
        id: 1,
        title: "Сбер",
        images: {
          alt: "Сбер",
          desktop: projectImg,
          desktop2x: projectImg,
          tablet: projectImgTablet,
          tablet2x: projectImgTablet,
          mobile: projectImgMobile,
          mobile2x: projectImgMobile,
        },
      },
      intro: {
        title: "Сбер-бизнес",
        description:
          "Коротко о главном: как мы помогли [клиенту] решить [проблему] и добиться [результата]",
      },
      mainImage: {},
      mainInfo: {
        title: "",
        list: [
          {
            id: 1,
            title: "Клиент: ",
            description: "Название компании, сфера деятельности",
          },
          {
            id: 2,
            title: "Задачи: ",
            description: "Какие проблемы решал проект?",
          },
          {
            id: 3,
            title: "Сроки: ",
            description: "Сколько времени заняла реализация",
          },
          {
            id: 4,
            title: "Команда: ",
            description:
              "Кто работал над проектом (дизайнеры, разработчики, менеджеры)",
          },
          {
            id: 5,
            title: "Ссылка на проект: ",
            description: "example.com",
          },
        ],
      },
      details: {
        list: [
          {
            id: 1,
            title: "Цель клиента",
            description:
              "[Клиент] хотел [основная цель], но столкнулся с [проблемой]. Наша задача – решить это через [стратегию: дизайн, технологию, редизайн]",
          },
          {
            id: 2,
            title: "Вызовы",
            description:
              "[Клиент] хотел [основная цель], но столкнулся с [проблемой]. Наша задача – решить это через [стратегию: дизайн, технологию, редизайн]",
            list: ["[Вызов 1]", "[Вызов 2]", "[Вызов 3]"],
          },
          {
            id: 3,
            title: "Исследования и аналитика",
            description:
              "Перед началом работы мы провели [аудит / опросы / анализ конкурентов] и выяснили:",
            list: ["[Инсайт 1]", "[Инсайт 2]", "[Инсайт 3]"],
          },
          {
            id: 4,
            title: "Функционал и особенности",
            description: "В проекте мы реализовали:",
            list: ["[Фича 1]", "[Фича 2]", "[Фича 3]"],
          },
        ],
      },
      results: [
        {
          id: 1,
          title: "",
          description: "",
          images: [],
        },
      ],
      metrics: {
        title: "",
        list: [
          {
            id: 1,
            number: "01",
            title: "Конверсия выросла на [X]%",
          },
          {
            id: 2,
            number: "02",
            title: "Время на сайте увеличилось до [X] минут",
          },
          {
            id: 3,
            number: "03",
            title: "Продажи выросли в [X] раз",
          },
        ],
      },
    },
  },
  {
    id: 4,
    casePageData: {
      image: {
        id: 1,
        title: "Сбер",
        images: {
          alt: "Сбер",
          desktop: projectImg,
          desktop2x: projectImg,
          tablet: projectImgTablet,
          tablet2x: projectImgTablet,
          mobile: projectImgMobile,
          mobile2x: projectImgMobile,
        },
      },
      intro: {
        title: "Ростелеком",
        description:
          "Коротко о главном: как мы помогли [клиенту] решить [проблему] и добиться [результата]",
      },
      mainImage: {},
      mainInfo: {
        title: "",
        list: [
          {
            id: 1,
            title: "Клиент: ",
            description: "Название компании, сфера деятельности",
          },
          {
            id: 2,
            title: "Задачи: ",
            description: "Какие проблемы решал проект?",
          },
          {
            id: 3,
            title: "Сроки: ",
            description: "Сколько времени заняла реализация",
          },
          {
            id: 4,
            title: "Команда: ",
            description:
              "Кто работал над проектом (дизайнеры, разработчики, менеджеры)",
          },
          {
            id: 5,
            title: "Ссылка на проект: ",
            description: "example.com",
          },
        ],
      },
      details: {
        list: [
          {
            id: 1,
            title: "Цель клиента",
            description:
              "[Клиент] хотел [основная цель], но столкнулся с [проблемой]. Наша задача – решить это через [стратегию: дизайн, технологию, редизайн]",
          },
          {
            id: 2,
            title: "Вызовы",
            description:
              "[Клиент] хотел [основная цель], но столкнулся с [проблемой]. Наша задача – решить это через [стратегию: дизайн, технологию, редизайн]",
            list: ["[Вызов 1]", "[Вызов 2]", "[Вызов 3]"],
          },
          {
            id: 3,
            title: "Исследования и аналитика",
            description:
              "Перед началом работы мы провели [аудит / опросы / анализ конкурентов] и выяснили:",
            list: ["[Инсайт 1]", "[Инсайт 2]", "[Инсайт 3]"],
          },
          {
            id: 4,
            title: "Функционал и особенности",
            description: "В проекте мы реализовали:",
            list: ["[Фича 1]", "[Фича 2]", "[Фича 3]"],
          },
        ],
      },
      results: [
        {
          id: 1,
          title: "",
          description: "",
          images: [],
        },
      ],
      metrics: {
        title: "",
        list: [
          {
            id: 1,
            number: "01",
            title: "Конверсия выросла на [X]%",
          },
          {
            id: 2,
            number: "02",
            title: "Время на сайте увеличилось до [X] минут",
          },
          {
            id: 3,
            number: "03",
            title: "Продажи выросли в [X] раз",
          },
        ],
      },
    },
  },
];
