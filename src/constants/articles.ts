import article1 from "../assets/articles/article-1.png";
import article2 from "../assets/articles/article-2.png";
import article3 from "../assets/articles/article-3.png";
import article4 from "../assets/articles/article-4.png";
import type { IArticleCard } from "../components/ArticleCard/ArticleCard";

export const articles: Array<IArticleCard> = [
  {
    id: 1,
    href: "",
    image: article1,
    date: "26 ноября 2024",
    title:
      "Дизайн интерфейса в «черную пятницу»: как выделиться среди конкурентов и позаботиться о пользователях",
  },
  {
    id: 2,
    href: "",
    image: article2,
    date: "10 октября 2024",
    title: "Понятный интерфейс: чего избегать, чтобы не запутать пользователя",
  },
  {
    id: 3,
    href: "",
    image: article3,
    date: "9 июля 2024",
    title:
      "Кейс: сложные интерфейсы для промышленного оборудования и дизайн-система за 7 месяцев",
  },
  {
    id: 4,
    href: "",
    image: article4,
    date: "8 ноября 2022",
    title:
      "Как сделать интерфейс доступным для людей с ограниченными возможностями здоровья",
  },
];
