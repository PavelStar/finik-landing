import type { FC } from "react";
import { Section, Button, Title } from "../../components/index";
import styles from "./Intro.module.scss";

interface IIntro {
  title: string;
  buttonText?: string;
  onClick?: () => void;
}

const Intro: FC<IIntro> = ({ title, buttonText, onClick }) => {
  return (
    <Section className={styles.intro}>
      {buttonText && (
        <Button className={styles.button} onClick={onClick}>
          Обсудить проект
        </Button>
      )}
      <Title className={styles.title} level={1} size="XL">
        {title}
      </Title>
    </Section>
  );
};

export default Intro;
