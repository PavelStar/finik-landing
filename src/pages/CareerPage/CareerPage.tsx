import { useEffect, useState, type FC } from "react";
import classNames from "classnames/bind";
import styles from "./CareerPage.module.scss";
import { Career, Intro, Advantages } from "../../sections/index";
import type { IAdvantages, ICareer, IIntro } from "../../types/types";
import { URL_PREFIX } from "../../constants/url";

const cx = classNames.bind(styles);

interface ICareerPageProps {
  id?: string;
}

interface ICareerPage {
  intro: IIntro;
  advantages: IAdvantages;
  career: ICareer;
}

const CareerPage: FC<ICareerPageProps> = () => {
  const [data, setData] = useState<ICareerPage | null>(null);

  useEffect(() => {
    fetch(`${URL_PREFIX}/careerPage/data.json`)
      .then((res) => {
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return;

  return (
    <div className={cx(styles.career)}>
      <Intro {...data.intro} />
      <Advantages {...data.advantages} />
      <Career itemsType="link" {...data.career} />
    </div>
  );
};

export default CareerPage;
