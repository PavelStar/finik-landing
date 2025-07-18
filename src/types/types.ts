export interface IPicture {
  alt?: string;
  images: {
    desktop: string;
    desktop2x?: string;
    tablet?: string;
    tablet2x?: string;
    mobile?: string;
    mobile2x?: string;
  };
}

export interface IButton {
  isHidden?: boolean;
  text: string;
  scrollId?: string;
  href?: string;
}

export interface IArticlesPage {
  intro: IIntro;
  list: Array<IArticle>;
}

export interface IArticles {
  id: string;
  title: string;
  list: Array<IArticle>;
  button?: IButton;
}

export interface IArticle {
  id: number;
  href: string;
  date: string;
  title: string;
  image: IPicture;
}

export interface IIntro {
  id: string;
  title?: string;
  description?: string;
  button?: IButton;
}

export interface ICasesPage {
  intro: IIntro;
  list: Array<ICasesPageItem>;
}

export interface ICasesPageItem {
  id: number;
  title?: string;
  description: string;
  image: IPicture;
}

export interface ICases {
  id?: string;
  list: Array<ICase>;
}

export interface ICase {
  id: number;
  title?: string;
  image: IPicture;
}

export interface ICasePage {
  list: Array<ICasePageItem>;
}

export interface ICasePageItem {
  id: number;
  intro: IIntro;
  cover: {
    id: number;
    title: string;
    image: IPicture;
  };
  mainInfo: {
    title: string;
    list: Array<{
      id: number;
      title: string;
      description: string;
    }>;
  };
  details: {
    id?: string;
    title: string;
    list: Array<{
      id: number;
      title: string;
      description?: string;
      list: Array<string>;
    }>;
  };
  results: {
    id: string;
    list: Array<{
      title: string;
      content: {
        title: string;
        description: string;
        slides: Array<ISlide>;
      };
    }>;
  };
  metrics: {
    id: string;
    list: Array<IStep>;
  };
}

export interface IServices {
  id?: string;
  title: string;
  list: Array<IService>;
}

export interface IService {
  id: number;
  title: string;
  image: IPicture;
  list: Array<string>;
  button?: IButton;
}

export interface IPartners {
  id: string;
  title?: string;
  list: Array<IPartner>;
}

export interface IPartner {
  id: number;
  icon: string;
  image: IPicture;
  href?: string;
}

export interface IAbout {
  id: string;
  list: Array<string>;
  slides: Array<ISlide>;
}

export interface ISlide {
  id: number;
  image: IPicture;
}

export interface ISteps {
  id: string;
  title: string;
  list: Array<IStep>;
}

export interface IStep {
  id: number;
  number: string;
  title: string;
}

export interface IContacts {
  id: string;
  title?: string;
  content: {
    title?: string;
    description?: string;
    list: Array<Icontact>;
  };
}

export interface Icontact {
  id: number;
  type?: "mail" | "phone";
  text: string;
}

export interface IAdvantages {
  id: string;
  title: string;
  list: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export interface ICareer {
  id: string;
  title: string;
  list: Array<ICareerItem>;
  outro?: {
    title: string;
    description: {
      text: string;
      link: string;
    };
    button?: IButton;
  };
}

export interface ICareerItem {
  isHidden: boolean;
  id: number;
  title: string;
  content: {
    description?: {
      title: string;
      text: string;
    };
    lists: Array<{
      title: string;
      items: Array<string>;
    }>;
    outro: string;
  };
}

export interface IExamples {
  id: string;
  title: string;
  content: {
    title: string;
    description: string;
    slides: Array<ISlide>;
  };
}

export interface ISlide {
  id: number;
  image: IPicture;
}

export interface IVacancyPage {
  title: string;
  list: Array<IVacancyItem>;
}

export interface IVacancyItem {
  id: number;
  title: string;
  content: IVacancyContent;
}

export interface IVacancyContent {
  description: {
    title: string;
    text: string;
  };
  lists: Array<{
    title: string;
    items: Array<string>;
  }>;
  outro?: {
    text: string;
    link: string;
  };
}

export interface IPrivacyPage {
  intro: IIntro;
  list: Array<IPrivacyItem>;
}

export interface IPrivacyItem {
  id: number;
  title: string;
  list: Array<string | IPrivacyInnerItem>;
}

export interface IPrivacyInnerItem {
  title: string;
  list: Array<string>;
}

export interface IAgreementPage {
  intro: IIntro;
  content: {
    intro: string;
    list: Array<string>;
  };
}
