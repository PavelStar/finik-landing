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
  text: string;
  scrollId?: string;
}

export interface IArticles {
  sectionId: string;
  sectionTitle: string;
  list: [];
}

export interface IIntro {
  id: string;
  title?: string;
  description?: string;
  button?: IButton;
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
}

export interface IPartners {
  id: string;
  list: Array<IPartner>;
}

export interface IPartner {
  id: number;
  icon: string;
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
  };
}

interface ICareerItem {
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
