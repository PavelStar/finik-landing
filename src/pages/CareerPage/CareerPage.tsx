import { type FC } from "react";
import { Section } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./CareerPage.module.scss";
import { Career, Intro, Advantages } from "../../sections/index";

const cx = classNames.bind(styles);

interface ICareerPage {
  id?: string;
}

const CareerPage: FC<ICareerPage> = ({ id }) => {
  return (
    <Section className={cx(styles.career)} theme="transparent" id={id}>
      <Intro
        title="карьера"
        description={"Стань частью команды FINIK Design Lab"}
      />
      <Advantages />
      <Career itemsType="link" />
    </Section>
  );
};

export default CareerPage;
