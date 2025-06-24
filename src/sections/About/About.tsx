import type { FC } from "react";
import {
  Paragraph,
  Section,
  SectionGrid,
  Gallery,
  Container,
} from "../../components/index";
import classNames from "classnames/bind";
import styles from "./About.module.scss";

const cx = classNames.bind(styles);

interface IAbout {
  id?: string;
}

const About: FC<IAbout> = ({ id }) => {
  return (
    <Section className={styles.about} theme="dark" fullWidth id={id}>
      <Container className={styles.container}>
        <SectionGrid
          className={styles.grid}
          contentClassName={styles.content}
          titleWrapClassName={styles.titleWrap}
          title="О нас"
          theme="dark"
        >
          <div className={cx(styles.textWrap)}>
            <div className={cx(styles.textInner)}>
              <Paragraph>
                FINIK Design Lab (входит в Лигу Цифровой Экономики) создает
                интерфейсы сложных систем и приложений для клиентов из разных
                сфер
              </Paragraph>
              <Paragraph>
                Работаем как с существующими решениями, так и создаем их с нуля.
                Опираемся на данные и метрики, проводим UX-аудиты и исследования
              </Paragraph>
              <Paragraph>
                Готовы подключиться к проекту на любой стадии или реализовать
                амбициозный замысел с нуля
              </Paragraph>
            </div>
          </div>
        </SectionGrid>
      </Container>
      <Gallery />
    </Section>
  );
};

export default About;
