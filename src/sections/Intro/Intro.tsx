import { Section, Button, Title } from "../../components/index";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <Section className={styles.intro}>
      <Button className={styles.button}>Обсудить проект</Button>
      <Title className={styles.title} level={1} size="XL">
        Инновации, которые трансформируют бизнес
      </Title>
    </Section>
  );
};

export default Intro;
