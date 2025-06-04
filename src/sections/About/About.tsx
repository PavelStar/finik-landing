import type { FC } from "react";
import { Paragraph, Section, SectionGrid } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./About.module.scss";
import Marquee from "react-fast-marquee";
import { slides } from "../../constants/slider";

const cx = classNames.bind(styles);

interface IAbout {
  id?: string;
}

const About: FC<IAbout> = ({ id }) => {
  return (
    <Section className={cx(styles.about)} id={id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title="О нас"
        titleColor="grey"
      >
        <div className={cx(styles.textWrap)}>
          <div className={cx(styles.textInner)}>
            <Paragraph>
              FINIK Design Lab (входит в Лигу Цифровой Экономики) создает
              интерфейсы сложных систем и приложений для клиентов из разных сфер
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
      <Marquee
        className={cx(styles.marquee)}
        gradient={false}
        speed={100}
        pauseOnHover={false}
        autoFill={true}
      >
        <ul className={cx(styles.list)}>
          {slides.map((slide) => {
            return (
              <li key={slide.id}>
                <img src={slide.image} alt="" />
              </li>
            );
          })}
        </ul>
      </Marquee>
    </Section>
  );
};

export default About;
