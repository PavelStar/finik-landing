import service1 from "../assets/services/service-1.png";
import service2 from "../assets/services/service-2.png";
import service3 from "../assets/services/service-3.png";
import service4 from "../assets/services/service-4.png";

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
