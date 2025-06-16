import type { FC } from "react";
import { Section, Button, Title, Paragraph } from "../../components/index";
import styles from "./Intro.module.scss";

interface IIntro {
  title: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
}

const Intro: FC<IIntro> = ({ title, description, buttonText, onClick }) => {
  return (
    <Section className={styles.intro}>
      {buttonText && (
        <Button className={styles.button} onClick={onClick}>
          Обсудить проект
        </Button>
      )}
      <Title
        className={styles.title}
        level={1}
        size="XL"
        weight="extraBold"
        textTransform="uppercase"
      >
        {title}
      </Title>
      {description && (
        <Paragraph
          className={styles.description}
          color="light"
          size="L"
          weight="medium"
        >
          {description}
        </Paragraph>
      )}
    </Section>
  );
};

export default Intro;
