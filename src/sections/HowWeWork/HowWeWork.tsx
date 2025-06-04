import type { FC } from "react";
import { Section, SectionGrid, WorkCard } from "../../components/index";
import classNames from "classnames/bind";
import styles from "./HowWeWork.module.scss";
import { workCards } from "../../constants/howWeWork";

const cx = classNames.bind(styles);

interface IHowWeWork {
  id?: string;
}

const HowWeWork: FC<IHowWeWork> = ({ id }) => {
  return (
    <Section className={cx(styles.howWeWork)} id={id}>
      <SectionGrid
        contentClassName={styles.content}
        titleWrapClassName={styles.titleWrap}
        title="Как мы работаем"
        titleColor="grey"
      >
        <ul className={styles.inner}>
          {workCards.map((card) => {
            return (
              <li key={card.id} className={styles.cardWrap}>
                <WorkCard number={card.number} title={card.title} />
              </li>
            );
          })}
        </ul>
      </SectionGrid>
    </Section>
  );
};

export default HowWeWork;
