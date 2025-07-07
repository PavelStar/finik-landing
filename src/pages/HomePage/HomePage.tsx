import {
  Intro,
  Cases,
  Partners,
  Services,
  About,
  Steps,
  Contacts,
  Career,
  Articles,
} from "../../sections/index";
import { ANCHORS } from "../../constants/anchors";
import { useEffect, useState, type FC } from "react";
import type {
  IAbout,
  IArticles,
  ICareer,
  ICases,
  IContacts,
  IIntro,
  IPartners,
  IServices,
  ISteps,
} from "../../types/types";
// import { scrollToSection } from "../../utils/scroll";

interface IHomePage {
  onModalOpen: () => void;
}

interface IHomePageData {
  intro: IIntro;
  cases: ICases;
  partners: IPartners;
  services: IServices;
  about: IAbout;
  howWeWork: ISteps;
  articles: IArticles;
  contacts: IContacts;
  career: ICareer;
}

const HomePage: FC<IHomePage> = ({ onModalOpen }) => {
  const [data, setData] = useState<IHomePageData | null>(null);

  useEffect(() => {
    fetch(`/finik-landing/data/homePage/data.json`)
      // fetch(`/new/data/homePage/data.json`)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return;

  return (
    <>
      <Intro {...data.intro} />
      <Cases {...data.cases} />
      <Partners {...data.partners} />
      <Services {...data.services} />
      <About {...data.about} />
      <Steps {...data.howWeWork} />
      <Articles {...data.articles} />
      <Contacts {...data.contacts} onClick={onModalOpen} />
      <Career {...data.career} />
    </>
  );
};

export default HomePage;
