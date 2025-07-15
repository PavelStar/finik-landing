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
import { useEffect, useState, type FC } from "react";
import type {
  IAbout,
  IArticles,
  ICareer,
  ICases,
  IIntro,
  IPartners,
  IServices,
  ISteps,
} from "../../types/types";
import { URL_PREFIX } from "../../constants/url";
import styles from "./HomePage.module.scss";

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
  career: ICareer;
}

const HomePage: FC<IHomePage> = ({ onModalOpen }) => {
  const [data, setData] = useState<IHomePageData | null>(null);

  useEffect(() => {
    fetch(`${URL_PREFIX}/homePage/data.json`)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return;

  return (
    <>
      <Intro className={styles.intro} {...data.intro} />
      <Cases {...data.cases} />
      <Partners {...data.partners} />
      <Services {...data.services} />
      <About {...data.about} />
      <Steps {...data.howWeWork} />
      <Articles {...data.articles} />
      <Contacts onClick={onModalOpen} />
      <Career {...data.career} itemsType="link" />
    </>
  );
};

export default HomePage;
