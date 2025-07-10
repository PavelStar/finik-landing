import { useEffect, useState, type FC } from "react";
import { Section } from "../../components/index";
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

const CareerPage: FC<ICareerPageProps> = ({ id }) => {
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

  console.log("data.intro", data);

  return (
    <Section className={cx(styles.career)} theme="transparent" id={id}>
      <Intro {...data.intro} />
      <Advantages {...data.advantages} />
      <Career itemsType="link" {...data.career} />
    </Section>
  );
};

export default CareerPage;
