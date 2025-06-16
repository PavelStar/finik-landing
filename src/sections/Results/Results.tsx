import type { FC } from "react";
import { Section, SectionGrid, Title, Paragraph } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./Results.module.scss";
import Marquee from "react-fast-marquee";
import { slides } from "../../constants/results";

const cx = classNames.bind(styles);

interface IResults {
  id?: string;
}

const Results: FC<IResults> = ({ id }) => {
  return (
    <Section className={cx(styles.results)} id={id}>
      <SectionGrid
        className={cx(styles.grid)}
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title="Экраны"
        titleColor="darkGrey"
      >
        <div className={styles.textInner}>
          <Title level={2} size="L" weight="medium">
            Главный экран
          </Title>
          <Paragraph>
            Мы сделали акцент на [элемент: например, «кнопке призыва к
            действию»], чтобы увеличить конверсию. [Пояснение: например, «Яркий
            цвет и микроанимация привлекли на 20% больше кликов»]
          </Paragraph>
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
      <SectionGrid
        className={cx(styles.grid)}
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        titleColor="darkGrey"
      >
        <div className={styles.textInner}>
          <Title level={2} size="L" weight="medium">
            Личный кабинет
          </Title>
          <Paragraph>
            Упростили процесс [действия: например, «оформления заказа»] за счет
            [решения: «прогресс-бара и подсказок»]
          </Paragraph>
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

export default Results;
