import service1 from "../assets/services/service-1.png";
import service2 from "../assets/services/service-2.png";
import service3 from "../assets/services/service-3.png";
import service4 from "../assets/services/service-4.png";

import servicePage1 from "../assets/services/service-page-1.png";
// import servicePage1Tablet from "../assets/services/service-page-1-tablet.png";
// import servicePage1Mobile from "../assets/services/service-page-1-mobile.png";
import type { ISlide } from "./slider";

export interface IService {
  id: number;
  image?: string;
  title: string;
  content: Array<string>;
}

export const services: Array<IService> = [
  {
    id: 1,
    image: service1,
    title: "Продуктовый дизайн",
    content: [
      "Интерфейсы сложных систем",
      "Сайты, веб-порталы",
      "Дизайн-системы",
      "Мобильные приложения",
      "Продуктовые каталоги",
      "Маркетплейсы",
    ],
  },
  {
    id: 2,
    image: service2,
    title: "Коммуникационный дизайн",
    content: [
      "Оформление интерфейсов сайтов и приложений",
      "Создание промоматериалов",
      "Позиционирование и продвижение бренда визуальными средствами",
    ],
  },
  {
    id: 3,
    image: service3,
    title: "UX-исследования",
    content: [
      "Аудит продукта",
      "Организация и проведение исследований",
      "Подготовка подробных отчетов",
      "Доработка продукта по итогам исследования",
    ],
  },
  {
    id: 4,
    image: service4,
    title: "Копирайтинг и UX-райтинг",
    content: [
      "Создание и редактура текстов сервисов и интерфейсов",
      "Подготовка email-рассылок",
      "Разработка гайдов и редполитики",
    ],
  },
];

export const servicesData = [
  {
    id: 1,
    servicePageData: {
      intro: {
        title: "Продуктовый дизайн",
        description:
          "Коммуникационный дизайн — это не просто красивая картинка, а продуманная система визуальных сообщений. Мы разрабатываем фирменный стиль, упаковку, рекламные материалы и цифровые продукты, которые помогают брендам говорить с клиентами на одном языке",
      },
      choice: {
        title: "",
        list: [
          {
            id: 1,
            number: "01",
            title: "Проводим глубокий анализ целевой аудитории",
          },
          {
            id: 2,
            number: "02",
            title: "Работаем с любыми носителями: от печати до digital",
          },
          {
            id: 3,
            number: "03",
            title: "Упор на функциональность, а не только на эстетику",
          },
          {
            id: 4,
            number: "04",
            title: "Гибкие условия сотрудничества",
          },
        ],
      },
      slides: [{}],
    },
  },
  {
    id: 2,
    servicePageData: {
      intro: {
        title: "Коммуникационный дизайн",
        description:
          "Коммуникационный дизайн — это не просто красивая картинка, а продуманная система визуальных сообщений. Мы разрабатываем фирменный стиль, упаковку, рекламные материалы и цифровые продукты, которые помогают брендам говорить с клиентами на одном языке",
      },
      choice: {
        title: "",
        list: [
          {
            id: 1,
            number: "01",
            title: "Проводим глубокий анализ целевой аудитории",
          },
          {
            id: 2,
            number: "02",
            title: "Работаем с любыми носителями: от печати до digital",
          },
          {
            id: 3,
            number: "03",
            title: "Упор на функциональность, а не только на эстетику",
          },
          {
            id: 4,
            number: "04",
            title: "Гибкие условия сотрудничества",
          },
        ],
      },
      slides: [{}],
    },
  },
  {
    id: 3,
    servicePageData: {
      intro: {
        title: "UX-исследования",
        description:
          "Коммуникационный дизайн — это не просто красивая картинка, а продуманная система визуальных сообщений. Мы разрабатываем фирменный стиль, упаковку, рекламные материалы и цифровые продукты, которые помогают брендам говорить с клиентами на одном языке",
      },
      choice: {
        title: "",
        list: [
          {
            id: 1,
            number: "01",
            title: "Проводим глубокий анализ целевой аудитории",
          },
          {
            id: 2,
            number: "02",
            title: "Работаем с любыми носителями: от печати до digital",
          },
          {
            id: 3,
            number: "03",
            title: "Упор на функциональность, а не только на эстетику",
          },
          {
            id: 4,
            number: "04",
            title: "Гибкие условия сотрудничества",
          },
        ],
      },
      slides: [{}],
    },
  },
  {
    id: 4,
    servicePageData: {
      intro: {
        title: "Копирайтинг и UX-райтинг",
        description:
          "Коммуникационный дизайн — это не просто красивая картинка, а продуманная система визуальных сообщений. Мы разрабатываем фирменный стиль, упаковку, рекламные материалы и цифровые продукты, которые помогают брендам говорить с клиентами на одном языке",
      },
      choice: {
        title: "",
        list: [
          {
            id: 1,
            number: "01",
            title: "Проводим глубокий анализ целевой аудитории",
          },
          {
            id: 2,
            number: "02",
            title: "Работаем с любыми носителями: от печати до digital",
          },
          {
            id: 3,
            number: "03",
            title: "Упор на функциональность, а не только на эстетику",
          },
          {
            id: 4,
            number: "04",
            title: "Гибкие условия сотрудничества",
          },
        ],
      },
      slides: [{}],
    },
  },
];

export const slides: Array<ISlide> = [
  {
    id: 1,
    image: servicePage1,
  },
  {
    id: 2,
    image: servicePage1,
  },
  {
    id: 3,
    image: servicePage1,
  },
];
